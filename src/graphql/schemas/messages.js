module.exports = `
    type Message {
        id: ID!
        message: String!
    }
    type Query {
        messages: [Message!]!
    }
    type Mutation {
        addMessage(message: String): Message
    }
`;