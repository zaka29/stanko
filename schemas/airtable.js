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

const AirTableRecord = new GraphQLObjectType({
    name: 'AirTable',
    fields: () => ({
        title: {type: GraphQLString},
        slug: {type: GraphQLString},
        markdown: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        records: {
            type: new GraphQLList(AirTableRecord),
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
                        console.log('just right before shooting resolve function - > ');
                        console.log('firstPage res - > ', res);

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