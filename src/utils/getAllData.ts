// import { AllNames, Name, Person } from "@/types/types";
// import { promises as fs } from "fs";

// const createName = (jsonData: Person): Name => {
//   const yearsObj = Object.entries(jsonData)
//     .filter(([key]) => !isNaN(Number(key)))
//     .map(([key, value]) => ({
//       [key]: isNaN(Number(value)) ? 0 : Number(value),
//     }));

//   const allYears: number[] = yearsObj.map((item) =>
//     Number(Object.keys(item)[0])
//   );
//   const amounts: number[] = yearsObj.map((item) =>
//     Number(Object.values(item)[0])
//   );
//   const count = jsonData.from;
//   const femaleData =
//     jsonData.gender === "f"
//       ? {
//           count,
//           yearsObj,
//           allYears,
//           amounts,
//         }
//       : null;
//   const maleData =
//     jsonData.gender === "m"
//       ? {
//           count,
//           yearsObj,
//           allYears,
//           amounts,
//         }
//       : null;

//   return {
//     name: jsonData.first_name,
//     total: jsonData.from,
//     female: femaleData,
//     male: maleData,
//   };
// };
// export const gernateData = async (): Promise<{
//   allData: AllNames;
//   names: string[];
// }> => {
//   const jsonData = await Promise.all([
//     fs.readFile(process.cwd() + "/data/jf.json", "utf8"),
//     fs.readFile(process.cwd() + "/data/jm.json", "utf8"),
//   ]);
//   const data: Person[] = jsonData.map((item) => JSON.parse(item)).flat();
//   const allNames: string[] = [];
//   const allData: AllNames = data.reduce((acc, curr) => {
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
//   }, {} as AllNames);

//   return { allData, names: allNames };
// };
