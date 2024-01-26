/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const users: User[] = [
  {
    name: "Yar",
    surname: "Pelykh",
    email: "y.pelykh@gmail.com",
    password: "qwerty",
  },
];

function createOrUpdateUser(credentials: Partial<User>): User {
  const defaultUserCredentials: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  const existedUser: User | undefined = users.find(
    (user) => user.email === credentials.email
  );

  if (existedUser) {
    return { ...existedUser, ...credentials };
  }

  return { ...defaultUserCredentials, ...credentials };
}

const newUserCredentials: Partial<User> = {
  email: "y.pelykh@gmail.com",
  password: "password123",
};

console.log("before update", users[0]);
console.log("after update", createOrUpdateUser(newUserCredentials));

export {};
