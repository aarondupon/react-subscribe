import {useMemo} from 'react';
import {BehaviorSubject, Observable} from 'rxjs';

const useObservable:any = (initialValue:any)=>{
    const observable = useMemo(() => {
        let observable;
        if(initialValue instanceof Observable){       
            return initialValue;
        }else if(typeof initialValue === 'function'){
            return initialValue();
        }else{
            console.log('initialValue',initialValue)
            return new BehaviorSubject(initialValue);
        }
    },[initialValue]);

    return observable
}
export default useObservable;