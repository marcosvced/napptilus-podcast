export const parseSelector = (selector:string):string => (selector.replace(/:/g, '\\:').replace(/\(/g, '\\(').replace(/\)/g, '\\)'))