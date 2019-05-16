import { Observable, Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import shallowequal from 'shallowequal';

export default function subscribeObservableProps(props:any,[state,setState]:[any,Function],destroy$:Subject<boolean>){
    const observables = {};
    const subscriptions = {};
    Object.keys(props).forEach((key) => {
      const prop = props[key];
      if (prop instanceof Observable) {
      let observable = prop;
        // default behaviour
        if(subscriptions[key]) return;
        observables[key]= observable;
        subscriptions[key] = prop.pipe(takeUntil(destroy$)).subscribe((streamValue) => {
              if( 
                  state === undefined 
                  || shallowequal(state[key],streamValue) === false
                ){
                  const newState = {
                    ...state,
                    [key]:streamValue
                  }
                  setState(newState);
                 
              }
            });
        };
      })
    }