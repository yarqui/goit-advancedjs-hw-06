/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

type Literal = "enable" | "disable";
type StringOrNumber = string | number;

let union: StringOrNumber;
let literal: Literal;
