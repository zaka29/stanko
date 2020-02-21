const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require('graphql');

const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyKVOyUVOGmiatCP'
});

const base = Airtable.base('appzttEADM3ovtjXB');

const experience = new GraphQLObjectType({
    name: 'AirTableExperience',
    fields: () => ({
        title: {type: GraphQLString},
        slug: {type: GraphQLString},
        markdown: {type: GraphQLString},
    })
});

const header = new GraphQLObjectType({
    name: 'AirTableHeader',
    fields: () => ({
        name: {type: GraphQLString},
        position: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        experienceRecords: {
            type: new GraphQLList(experience),
            args: {
                base_name: {type: GraphQLString}
            },
            resolve: (parent, args) => {

                let promise = new Promise((resolve, reject) => {
                    base('experience').select({
                        view: 'all-posts',
                        fields:  ['title', 'slug', 'markdown']
                    }).firstPage(function(err, records) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        let res = records.map(record => record.fields);
                        resolve(res)
                    });
                });

                return promise.then(res => res)

            }
        },
        headerRecords: {
            type: new GraphQLList(header),
            resolve: (parent, args) => {

                let promise = new Promise((resolve, reject) => {
                    base('header').select({
                        view: 'all-posts',
                        fields:  ['name', 'position']
                    }).firstPage(function(err, records) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        let res = records.map(record => record.fields);
                        resolve(res)
                    });
                });

                return promise.then(res => res)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});