const { buildSchema } = require('graphql');
const messagesSchema = require('./messages');

const schemas = `
    ${messagesSchema}
`;

module.exports = buildSchema(schemas);