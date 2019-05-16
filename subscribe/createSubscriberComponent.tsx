import subscribe from '../renderprops/subscribe';
import React,{forwardRef,ReactType} from 'react';
import { Observable } from 'rxjs';

const createSubscriberComponent = <C extends ReactType>(
  Component:C
) => subscribe(Component)

export default createSubscriberComponent;
export {createSubscriberComponent as subscribe}