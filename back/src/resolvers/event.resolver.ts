/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import Event from '../models/Event';
import { IEvent, IInputEvent, IId } from '../interface/event.interface';
import { EventModel } from '../models/Event';
import { UserModel } from '../models/User';

export interface Context {
  user: UserModel;
}

interface EventMail {
  event: EventModel[];
  email: string
}

const eventResolver = {
  Query: {
    getEvent: async (
      _: unknown,
      parent: any,
      { _id }: { _id: string },
      context: Context
    ): Promise<EventModel | null> => {
      if (!context) {
        return null;
      }
      const event = await Event.findOne({ _id });
      return event;
    },
    getEvents: async (
      parent: any, 
      args: any, 
      ctx: Context
      ): Promise<EventMail | void> => {
      if (ctx.user) {
        const email = ctx.user.email;
        const event = await Event.find({});
        return { event, email };
    } 
    },
  },
  
// TODO ADD RULES IF NOT CONNECTED

  Mutation: {
    addEvent: async (
      _: unknown,
      args: { input: IInputEvent },
      ctx: Context
    ): Promise<EventModel |void> => {
      if (ctx && ctx.user){
        const { firstname, lastname, email } = ctx.user;
        const inputs = {...args.input, author: {firstname, lastname, email}}
        const event = await Event.create(inputs);
        return event;
      }
      
    },
    deleteEvent: async (_: unknown, args: { input: IId }, ctx: Context) => {
      const event = await Event.findOne({ _id: args.input });
      if (!event) throw new Error("This event does not exist");
      if (ctx.user.email === event.author.email) {
        await Event.deleteOne({ _id: args.input });
      } else throw Error("This event doesn't belong to you !")
    },
  },
};

export default eventResolver;
