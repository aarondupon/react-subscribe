import {ForwardRefExoticComponent,ComponentPropsWithRef} from 'react';
import createSubscriberComponent from '../subscribe/createSubscriberComponent'

const extendedSubscribed = createSubscriberComponent;

export declare const ISubscribeLibrary:
  typeof extendedSubscribed & {
    [Tag in keyof JSX.IntrinsicElements]: ForwardRefExoticComponent<
      ComponentPropsWithRef<Tag>
    >
  }
