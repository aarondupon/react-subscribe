import React,{ReactType,forwardRef} from 'react';
import {ForwardRefExoticComponent,ComponentPropsWithRef} from 'react';
import {decapitalize} from '../shared/helpers'
import createSubscriberComponent from '../subscribe/createSubscriberComponent'

const domElements:ReactType[] = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    // 'marquee', This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    // SVG
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]
  
  const extendedSubscribed = domElements.reduce((acc, element:ReactType) => {
    acc[element as string] = createSubscriberComponent(element)
    return acc
  }, createSubscriberComponent)
  
  
  declare const ISubscribeLibrary:
    typeof extendedSubscribed & {
      [Tag in keyof JSX.IntrinsicElements]: ForwardRefExoticComponent<
        ComponentPropsWithRef<Tag>
      >
    }
  
  
  
  export const apply = (target)=>{
   Object.keys(target).map((key)=>{
     const Component:string = decapitalize(key);
    extendedSubscribed[Component] = createSubscriberComponent(Component as ReactType);   
   })
  };
  
  
  export const subscriber = extendedSubscribed as typeof ISubscribeLibrary
  export const s = extendedSubscribed as typeof ISubscribeLibrary
  export const subscribe = extendedSubscribed as typeof ISubscribeLibrary
  