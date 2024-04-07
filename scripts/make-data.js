var fs = require("fs");
const { promises } = fs;

const createName = (jsonData) => {
  const yearsObj = Object.entries(jsonData)
    .filter(([key]) => !isNaN(Number(key)))
    .map(([key, value]) => ({
      [key]: isNaN(Number(value)) ? 0 : Number(value),
    }));

  const allYears = yearsObj.map((item) => Number(Object.keys(item)[0]));
  const amounts = yearsObj.map((item) => Number(Object.values(item)[0]));
  const count = jsonData.from;
  const femaleData =
    jsonData.gender === "f"
      ? {
        count,
        yearsObj,
        allYears,
        amounts,
      }
      : null;
  const maleData =
    jsonData.gender === "m"
      ? {
        count,
        yearsObj,
        allYears,
        amounts,
      }
      : null;

  return {
    name: jsonData.first_name,
    total: jsonData.from,
    female: femaleData,
    male: maleData,
  };
};

// const makeData = async () => {
//   const jsonData = await Promise.all([
//     promises.readFile(process.cwd() + "/data/jf.json", "utf8"),
//     promises.readFile(process.cwd() + "/data/jm.json", "utf8"),
//   ]);
//   const data = jsonData.map((item) => JSON.parse(item)).flat();
//   const allNames = [];
//   const allData = data.reduce((acc, curr) => {
//     const name = createName(curr);

//     if (acc[curr.first_name]) {
//       acc[curr.first_name] = {
//         ...acc[curr.first_name],
//         male: name.male,
//         total: acc[curr.first_name].total + name.total,
//       };
//       return acc;
//     }
//     allNames.push(curr.first_name);
//     acc[curr.first_name] = name;
//     return acc;
//   }, {});

//   return { allData, names: allNames };
// };

const make = async () => {
  const { allData, names } = await makeData();
  // save data to file src/store/data.ts
  await promises.writeFile(
    process.cwd() + "/src/store/data.ts",
    `
    import { AllNames } from "@/types/types";

    export const data:AllNames  = ${JSON.stringify(allData, null, 2)}
    
    export const names = ${JSON.stringify(names, null, 2)}
    `
  );
  console.log(`data genreate: click here to sew the data src/store/data.ts`);
};

// make();
