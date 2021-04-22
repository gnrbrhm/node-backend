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
      email: "admin@a101.com",
      password: "Password1",
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
    });
    number--;
  }
  return persons;
};
const generatePremises = (size) => {
  const premises = [];
  while (size >= 0) {
    premises.push({
      id: size,
      premise_name: "Premise" + size,
      country: "Turkey",
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      province: "Province" + size,
      lat: faker.address.latitude(42.02683, 35.9025, 7),
      long: faker.address.longitude(44.5742, 25.90902, 7),
    });
    size--;
  }
  return premises;
};
fs.writeFileSync(
  "./db.json",
  JSON.stringify({
    users: generatePersonsData(20),
    images: generateImages(5),
    premises: generatePremises(5000),
  })
);
