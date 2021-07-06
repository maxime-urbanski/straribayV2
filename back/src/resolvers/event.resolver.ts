/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import Event from '../models/Event';
import { IEvent, IInputEvent, IId } from '../interface/event.interface';

const eventResolver = {
  Query: {
    getEvent: async (_: unknown, { _id }: { _id: string }, context: any): Promise<IEvent | null> => {
      if(!context) {return null }
      const event = await Event.findOne({ _id });
      return <IEvent>event;
    },
    getEvents: async (context:any) => {
     
        const events = await Event.find({});
      
      return events;
   
    },
  },

  Mutation: {
    addEvent: async (
      _: unknown,
      args: { input: IInputEvent }
    ): Promise<IEvent> => {
      const event = await Event.create(args.input);
      return <IEvent>event;
    },
    deleteEvent: async (_: unknown, args: { input: IId }) => {
      await Event.deleteOne({ _id: args.input });
    },
  },
};

export default eventResolver;
