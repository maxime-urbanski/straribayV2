"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_resolver_1 = __importDefault(require("./event.resolver"));
const user_resolver_1 = __importDefault(require("./user.resolver"));
const { Query: EventQuery, Mutation: EventMutation } = event_resolver_1.default;
const { Query: UserQuery, Mutation: UserMutation } = user_resolver_1.default;
const resolvers = {
    Query: {
        ...EventQuery,
        ...UserQuery,
    },
    Mutation: {
        ...EventMutation,
        ...UserMutation,
    },
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map