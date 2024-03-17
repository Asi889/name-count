import { Person } from "@/types/types";

export function getUniqueNames(arr: any) {
  const uniqueNames = new Set();
  const result = [] as string[];

  arr.forEach((obj: Person) => {
    if (obj.hasOwnProperty("first_name")) {
      const name = obj.first_name;
      if (!uniqueNames.has(name)) {
        uniqueNames.add(name);
        result.push(name);
      }
    }
  });

  return result;
}

export function percentSplit(num1: number, num2: number) {
  const total = num1 + num2;
  const percent1 = Math.round((num1 / total) * 100) + "";
  const percent2 = Math.round((num2 / total) * 100) + "";

  if (num1 === 0 && num2 === 0) {
    return [0, 0];
  }
  return [percent1.toString(), percent2.toString()];
}
