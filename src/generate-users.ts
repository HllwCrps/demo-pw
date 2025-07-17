const { faker } = require('@faker-js/faker');

const randomUsername: string = faker.internet.username();
const randomPassword: string = faker.internet.password();

console.log('Random Username:', randomUsername);
console.log('Random Password:', randomPassword);