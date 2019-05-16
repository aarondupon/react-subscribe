import React, {forwardRef, useEffect, useState} from 'react';
import {Subject} from 'rxjs';
import useObservable from '../../hooks/useObservable';
import subscribeObservableProps from './subscribeObservableProps';

export const subscribe = (Component) => {
    const comp = forwardRef(({
        children,
        ...props
    }, forwardedRef) => {
        const destroy$: Subject<any> = useObservable(new Subject());
        const [state, setState] = useState({});

        useEffect(() => {
            subscribeObservableProps(props, [
                state, setState
            ], destroy$);
            return() => {
                destroy$.next(true);
                destroy$.unsubscribe();
            };
        }, [])

        const passThroughProps = {
            ...props,
            ...state,
            ref: forwardedRef
        };
        return React.createElement(Component, passThroughProps, children);

    })
    return comp;
}