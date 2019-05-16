import {subscribe as extendedSubscribed } from './subscribe/createSubscriberComponent';
import {ISubscribeLibrary} from './types';

export {apply as applyThree} from './targets/three';
export {apply} from './targets/web';

export const subscribe = extendedSubscribed as typeof ISubscribeLibrary
export const s = extendedSubscribed as typeof ISubscribeLibrary
export const subscriber = extendedSubscribed as typeof ISubscribeLibrary
