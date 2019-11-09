const graphqlHTTP = require('express-graphql');
const schemas = require('../graphql/schemas');
const resolvers = require('../graphql/resolvers');
const environment = process.env.ENV;

const middlewareConfig = {
    schema: schemas,
    rootValue: resolvers
};

if (environment && environment === 'dev') {
    middlewareConfig.graphiql = true;
}

module.exports = graphqlHTTP(middlewareConfig);