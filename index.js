const express = require('express');
const app = express();

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// data
const {courses} = require('./data.json');

console.log(courses);


const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    }

    type Course {
        id: Int
        title: String
        author: String
        topic: String
        url: String
    }
`);

const root = {
    message: () => 'hello world!'
}

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => console.log('server on port 3000'));

