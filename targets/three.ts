import React,{ReactType} from 'react';
import * as three from 'three';
import {decapitalize} from '../shared/helpers'
import createSubscriberComponent from '../subscribe/createSubscriberComponent'



export const apply = (target,camelCase = true)=>{
    let extendedSubscribed = createSubscriberComponent;
     Object.keys(target).map((key)=>{
       const Component:string = camelCase ? decapitalize(key) : key;
      extendedSubscribed[Component] = createSubscriberComponent(Component as ReactType);   
     })
     return extendedSubscribed;
};

let extendedSubscribed = apply(three);

export {
    extendedSubscribed as subscribe,
    extendedSubscribed as s,
 }