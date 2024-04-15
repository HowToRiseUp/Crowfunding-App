interface IInfo {
  name: string;
  value: number;
}

const data1: IInfo[] = [
  {
    name: "cc",
    value: 1,
  },
  {
    name: "cc",
    value: 1,
  },
  {
    name: "cc",
    value: 1,
  },
  {
    name: "cc",
    value: 1,
  },
  {
    name: "cc",
    value: 1,
  },
  {
    name: "cc",
    value: 1,
  },
];

function getDevicesKeys<Data, KKey extends keyof Data>(
  dataArray: Data[],
  DataKey: KKey
): Data[KKey][] {
  return dataArray.map((item) => item[DataKey]);
}
console.log(getDevicesKeys(data1, "name"));
