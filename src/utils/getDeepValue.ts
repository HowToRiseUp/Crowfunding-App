const obj = {
  foo: {
    id: 1,
    name: "a",
  },
  baz: {
    id: 2,
    name: "c",
  },
};

const getThisObj = <T, F extends keyof T, S extends keyof T[F]>(
  obj: T,
  first: F,
  second: S
) => {
  return obj[first][second];
};

console.log(getThisObj(obj, "baz", "name"));
