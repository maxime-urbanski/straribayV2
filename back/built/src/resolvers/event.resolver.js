"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
const Event_1 = __importDefault(require("../models/Event"));
const eventResolver = {
    Query: {
        getEvent: async (_, { _id }) => {
            console.log('id', _id);
            const event = await Event_1.default.findOne({ _id });
            return event;
        },
        getEvents: async () => Event_1.default.find({}),
    },
    Mutation: {
        addEvent: async (_, args) => {
            console.log('pas helooooooo', args.input);
            const event = await Event_1.default.create(args.input);
            // eslint-disable-next-line no-console
            console.log('helooooooooo', event, args);
            return event;
        },
    },
};
exports.default = eventResolver;
//# sourceMappingURL=event.resolver.js.map