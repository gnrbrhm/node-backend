const faker = require("faker");
const fs = require("fs");
/* Generate Images */
const generateImages = (number) => {
  const images = [];
  while (number !== 0) {
    const value = faker.image.image();
    images.push(value);
    number--;
  }
  return images;
};

/* Generate the Date */
const generateDate = () => {
  return faker.date.future();
};

// Code to generate User Mock data
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.firstName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
    });
    number--;
  }
  return persons;
};
fs.writeFileSync(
  "./db.json",
  JSON.stringify({ users: generatePersonsData(20) })
);

console.log(generatePersonsData(5));
