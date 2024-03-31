import { AllNames, Percent, Person, TotalObject } from "@/types/types";

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

export function percentSplit(num1: number, num2: number): Percent {
  const total = num1 + num2;
  const percent1 = Math.round((num1 / total) * 100) + "";
  const percent2 = Math.round((num2 / total) * 100) + "";

  if (num1 === 0 && num2 === 0) {
    return [`0`, `0`];
  }
  return [percent1.toString(), percent2.toString()];
}

export function findNamesWithSameTotals(data1: AllNames) {
  const totals = {} as any;
  let heighst = 0;

  // Group names by their total values
  for (const name in data1) {
    if (data1[name].male) {
      data1[name].male?.amounts.forEach((item) => {
        if (heighst < item) {
          heighst = item;
        }
      });
    }
    if (data1[name].female) {
      data1[name].female?.amounts.forEach((item) => {
        if (heighst < item) {
          heighst = item;
        }
      });
    }
    const total = data1[name].total;
    if (totals[total]) {
      totals[total].push(name);
    } else {
      totals[total] = [name];
    }
  }

  // Filter out total values that don't have more than one name associated
  const filteredTotals = Object.keys(totals).reduce(
    (acc: { [key: string]: any }, total) => {
      if (totals[total].length > 1) {
        acc[total] = totals[total];
      }
      return acc;
    },
    {}
  );

  return filteredTotals;
}

export function setName(value: string) {
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?name=${value}`
  );
}
export function findHighestTotal<T extends { [key: string]: TotalObject }>(
  data: T
): [keyof T, number] {
  let highestKey: keyof T | null = null;
  let highestTotal = Number.NEGATIVE_INFINITY;

  for (const [key, value] of Object.entries(data)) {
    if (value.total > highestTotal) {
      highestKey = key;
      highestTotal = value.total;
    }
  }

  return [highestKey!, highestTotal];
}

export function highestNumber(data: number[]) {
  if (data) {
    return data?.reduce((a: number, b: number) => {
      return Math.max(a, b);
    });
  }
}
