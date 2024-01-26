/*
  У вас є тип AllType. Існує функція combine, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція combine повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function combine<T extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const yar = combine(
  { name: "Yar", color: "white" },
  { position: 1, weight: 65 }
);

console.log("yar:", yar);
export {};
