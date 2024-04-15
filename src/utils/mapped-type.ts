type Concreate<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type User = {
  id: string;
  name?: string;
  des?: string;
};

// type UserConvert = Required<User>;
type UserConvert = Concreate<User>;

const user: UserConvert = {
  id: "1",
  des: "2",
  name: "4",
};
console.log("🚀 ~ user:", user);

interface nameRemove {
  name: string;
  id: number;
}

type RemoveField<Type> = {
  [Property in keyof Type as Exclude<Property, "name">]: Type[Property];
};

type IdAfterRemove = RemoveField<nameRemove>;
const user3: IdAfterRemove = {
  id: 1,
};
console.log("🚀 ~ user:", user3);
