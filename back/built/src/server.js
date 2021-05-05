"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const type_1 = require("./type/type");
const resolvers_1 = __importDefault(require("./resolvers"));
const app = express_1.default();
const port = 7777;
// To do: put domain restriction
app.use(cors_1.default());
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: type_1.typeDefs,
    resolvers: resolvers_1.default,
});
server.applyMiddleware({ app });
const start = async () => {
    try {
        await mongoose_1.default.connect(
        // Todo : Make a dotenv !!!
        // TIP: if you don't use docker, uncomment the next line.
        // ,
        // 'mongodb://127.0.0.1:27017/virtualschool',
        'mongodb://mongodb:27017/virtualschool', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            autoIndex: true,
        });
        // eslint-disable-next-line no-console
        console.log('Connected to database');
        app.listen(port, () => 
        // eslint-disable-next-line no-console
        console.log(`Express GraphQL Server is now running Youhou on localhost:${port}${server.graphqlPath}`));
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
    // middleware
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.get('/', (req, res) => {
        res.send('Welcome Home !');
    });
};
start();
//# sourceMappingURL=server.js.map