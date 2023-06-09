import { Event, Action } from '@strapi/database/lib/lifecycles';

type SubscriberFn = (event: Event) => Promise<void> | void;

type SubscriberMap = {
  [k in Action]: SubscriberFn;
};

export type Subscriber = SubscriberFn | SubscriberMap;
