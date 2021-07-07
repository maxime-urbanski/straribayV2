/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import Event from '../models/Event';
import { IEvent, IInputEvent, IId } from '../interface/event.interface';
import { EventModel } from '../models/Event';

const eventResolver = {
  Query: {
    getEvent: async (
      _: unknown,
      parent: any,
      { _id }: { _id: string },
      context: any
    ): Promise<EventModel | null> => {
      if (!context) {
        return null;
      }
      const event = await Event.findOne({ _id });
      return event;
    },
    getEvents: async (parent: any, args: any, ctx: any) => {
      console.log('Context', ctx.user);
      if (ctx.user) {
        const events = await Event.find({});
        return events;
    } 
    },
  },
  
// TODO ADD RULES IF NOT CONNECTED

  Mutation: {
    addEvent: async (
      _: unknown,
      args: { input: IInputEvent },
      ctx: any
    ): Promise<EventModel |void> => {
      if (ctx && ctx.user){
        const { firstname, lastname, email } = ctx.user;
        const event = await Event.create({...args.input, author: {firstname, lastname, email}});
        return event;
      }
      
    },
    deleteEvent: async (_: unknown, args: { input: IId }, ctx: any) => {
      const event = await Event.findOne({ _id: args.input });
      if (!event) throw new Error("This event does not exist");
      if (ctx.user.email === event.author.email) {
        await Event.deleteOne({ _id: args.input });
      }
    },
  },
};

export default eventResolver;
