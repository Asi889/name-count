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
