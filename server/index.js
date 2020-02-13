/**
 * Created by hamster1 on 1/2/20.
 */
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/airtable');
const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App started on ${PORT}`));
