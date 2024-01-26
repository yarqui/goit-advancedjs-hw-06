/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const userMaritalStatus: KeyValuePair<string, boolean> = {
  key: "isMarried",
  value: true,
};

const userAge: KeyValuePair<string, number> = {
  key: "age",
  value: 37,
};

console.log("userMaritalStatus:", userMaritalStatus);
console.log("userAge:", userAge);

export {};
