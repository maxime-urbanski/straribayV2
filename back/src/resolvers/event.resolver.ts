/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import Event from '../models/Event';
import { IEvent, IInputEvent, IId } from '../interface/event.interface';

const eventResolver = {
  Query: {
    getEvent: async (_: unknown, { _id }: { _id: string }): Promise<IEvent> => {
      console.log('id', _id);
      const event = await Event.findOne({ _id });
      return <IEvent>event;
    },
    getEvents: async () => {
      const events = await Event.find({})
      console.log("event find :", events)
      return events
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
    deleteAllEvents: async (
      _: unknown,
      args: { input: IId }
    ) => {
      const event = await Event.deleteOne({ _id: args.input });
    },
  },
}
  

export default eventResolver;
