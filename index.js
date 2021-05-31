// import HARDWARE_TYPE from "../ipc-marka-models.js";
const faker = require("faker");
const fs = require("fs");
const MODELS = require("./ipc-marka-models.json");
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
const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const generateModel = () => {
  let data = {};
  let vendors_array = [];
  let vendors_models = [];
  [...MODELS].forEach((item) => {
    vendors_array.push(item.hardware_vendor);
  });
  vendors_unique_array = vendors_array.filter(unique);
  // vendors_unique_array = vendors_unique_native_array.map((t) =>
  //   t.toUpperCase()
  // );
  console.log("Data", vendors_unique_array);

  vendors_unique_array.forEach((item) => {
    vendors_models.push(item);
    vendors_models[item] = [];
    let data = [...MODELS].filter((p) => {
      return p.hardware_vendor === item;
    });
    data.forEach((t) => {
      vendors_models[item].push(t.hardware_model);
    });
  });
  data = { ...vendors_models };
  return data;
};

// Generate Model 20
const generateModels2 = () => {
  let data = {};
  let hardware_vendor = [...MODELS].map((val) => {
    return val.hardware_vendor;
  });
  hardware_vendor = hardware_vendor.filter(unique);
  for (let i of hardware_vendor) {
    data[i] = [];
  }
  // console.log(hardware_vendor);
  [...MODELS].forEach((t) => {
    let hardware_model = hardware_vendor.filter((p) => p == t.hardware_vendor);
    data[t.hardware_vendor] = [...data[t.hardware_vendor], t.hardware_model];
    if (hardware_vendor.indexOf(t.hardware_vendor)) {
    }

    for (const [key, value] of Object.entries(t)) {
      if (key === "hardware") console.log(`${key}: ${value}`);
    }
  });
  console.log(data);

  return data;
};
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
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
// fs.writeFileSync("./IPC_models3.json", JSON.stringify(generateModels2()));
fs.writeFileSync("./IPC_models3.json", JSON.stringify(generateModel()));
// fs.writeFileSync(
//   "./IPC_models2.json",
//   JSON.stringify({ data: generateModel() })
// );
// console.info(formatNumber(167671.05));
// console.log(generateModel());
// fs.appendFile("./IPC_models2.json", JSON.stringify(generateModel()), (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// });

// generateModels2();
