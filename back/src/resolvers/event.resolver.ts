/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import Event from '../models/Event';
import { IEvent, IInputEvent, IId } from '../interface/event.interface';

const eventResolver = {
  Query: {
    getEvent: async (
      _: unknown,
      parent: any,
      { _id }: { _id: string },
      context: any
    ): Promise<IEvent | null> => {
      if (!context) {
        return null;
      }
      const event = await Event.findOne({ _id });
      return <IEvent>event;
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
    ): Promise<IEvent |void> => {
      if (ctx && ctx.user){
        const event = await Event.create(args.input);
        return <IEvent>event;
      }
      
    },

    deleteEvent: async (_: unknown, args: { input: IId }) => {
      await Event.deleteOne({ _id: args.input });
    },
  },
};

export default eventResolver;
