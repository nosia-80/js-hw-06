import users from './users.js';

/*
 * Задание 1
 * Получить массив имён всех пользователей (поле `name`).
 */

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/*
 * Задание 2
 * Получить массив объектов пользователей по цвету глаз (поле `eyeColor`).
 */

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/*
 * Задание 3
 * Получить массив имён пользователей по полу (поле `gender`).
 */

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*
 * Задание 4
 * Получить массив только неактивных пользователей (поле `isActive`).
 */

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*
 * Задание 5
 * Получить пользователя (не массив) по `email` (поле `email`, он уникальный).
 */

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

/*
 * Задание 6
 * Получить массив пользователей, попадающих в возрастную категорию от `min` до
 * `max` лет (поле `age`).
 */

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*
 * Задание 7
 * Получить общую сумму баланса (поле `balance`) всех пользователей.
 */

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

/*
 * Задание 8
 * Массив имён всех пользователей, у которых есть друг с указанным именем.
 */

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

/*
 * Задание 9
 * Массив имён (поле `name`) людей, отсортированных в зависимости от количества их
 * друзей (поле `friends`).
 */

const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/*
 * Задание 10
 * Получить массив всех умений всех пользователей (поле `skills`), при этом не
 * должно быть повторяющихся умений и они должны быть отсортированы в алфавитном
 * порядке.
 */

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((acc, user) => [...acc, ...user.skills], []);
  let arr = [];

  for (const skill of allSkills) {
    if (!arr.includes(skill)) {
      arr.push(skill);
    }
  }

  return arr.sort();

  // return users
  //   .flatMap(user => user.skills)
  //   .filter((skill, index, arr) => arr.indexOf(skill) === index)
  //   .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
