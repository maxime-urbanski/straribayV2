/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import Event from '../models/Event';
import { IEvent, IInputEvent } from '../interface/event.interface';

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
      console.log('pas helooooooo', args.input);
      const event = await Event.create(args.input);
      // eslint-disable-next-line no-console
      console.log('helooooooooo', event, args);
      return <IEvent>event;
    },
  },
};

export default eventResolver;
