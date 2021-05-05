"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
const User_1 = __importDefault(require("../models/User"));
const userResolver = {
    Query: {
        getUser: async (_, { _id }) => {
            // eslint-disable-next-line no-console
            console.log('email', _id);
            const user = await User_1.default.findOne({ _id });
            return user;
        },
        getUsers: async () => User_1.default.find({}),
    },
    Mutation: {
        addUser: async (_, args) => {
            const user = await User_1.default.create(args.input);
            // eslint-disable-next-line no-console
            console.log(user, args, args);
            return user;
        },
    },
};
exports.default = userResolver;
//# sourceMappingURL=user.resolver.js.map