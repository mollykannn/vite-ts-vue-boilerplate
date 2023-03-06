const toString = Object.prototype.toString
export const toTypeString = (value: unknown): string => toString.call(value)
export const isUndef = (val: unknown): val is undefined => typeof val === 'undefined'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
export const isNull = (val: unknown): val is null => val === null
export const isDate = (val: unknown): val is Date => toTypeString(val) === '[object Date]'
export const isRegExp = (val: unknown): val is RegExp => toTypeString(val) === '[object RegExp]'
export const isObjKey = <T extends Object>(key: PropertyKey, obj: T): key is keyof T => key in obj;
 