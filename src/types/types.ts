export type Person = {
  from: number;
  first_name: string;
  gender: string;
  [year: number]: number | string | any;
};

export type allPeopele = [Person];

export type ContainerPropsAll = {
  data: Person[];
};

export type Name = {
  name: string;
  total: number;
  female: {
    count: number;
    allYears: number[];
    amounts: number[];
    yearsObj: {
      [x: string]: number;
    }[];
  } | null;
  male: {
    count: number;
    allYears: number[];
    amounts: number[];
    yearsObj: {
      [x: string]: number;
    }[];
  } | null;
};

export type AllNames = {
  [name: string]: Name;
};
export type Percent = string[];
