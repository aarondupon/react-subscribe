export function decapitalize(s:string):string{
    if (typeof s !== 'string') return ''
    return s.charAt(0).toLocaleLowerCase() + s.slice(1)
}