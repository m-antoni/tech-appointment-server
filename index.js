const app = require('express')();
require('colors');
require('dotenv').config();
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

app.use(cors());

// MongoDB Connection
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, () => console.log(`Server running on port ${port}`));
