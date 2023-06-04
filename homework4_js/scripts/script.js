// Задание No_1
// Функция addUser(name, salary). Функция должна добавить нового пользователя как последний элемент в массив users. Функция должна автоматически подобрать значение id (реализовать аналог автоинкремента)

// let users = [
//     { id: 1, name: "Steven", salary: "5000" },
//     { id: 2, name: "Neena", salary: "10000" },
//     { id: 3, name: "John", salary: "4500" },
//   ];
  
//   const addUser = (name, salary) => {
//     const id = users.length + 1;
//     const user = {
//       id,
//       name,
//       salary,
//     };
//     users.push(user);
//   };
  
// addUser("Valeriy", 12399929);
// addUser("Leoha", 9999999);
// console.log(users);


// Задание No_2
// Функция removeUser(id). Функция должна по передаваемому в качестве аргумента ID реализовать удаление пользователя в массиве users

// let users = [
//     { id: 1, name: "Steven", salary: "5000" },
//     { id: 2, name: "Neena", salary: "10000" },
//     { id: 3, name: "John", salary: "4500" },
// ];

// const removeUser = (id) => {
//     users = users.filter((users) => users.id !== id)
// }
// removeUser(3)
// console.log(users);

  
// Задание No_3
// Функция changeUser(id, name, salary). Функция должна по id найти заданный элемент и переопределить значение name и salary на значение, указанные в аргументе в момент вызова

// let users = [
//     { id: 1, name: "Steven", salary: "5000" },
//     { id: 2, name: "Neena", salary: "10000" },
//     { id: 3, name: "John", salary: "4500" },
// ];

// const changeUser = (id, name, salary) => {
//     const user = users.find((user) => user.id === id);
//     if (user) {
//         user.name = name;
//         user.salary = salary;
//     } else if ("undefined") {
//       console.log("Error!");
//     }

// }

// changeUser(1, "Alexei", 2000)
// console.log(users);






















































