import { String, Union } from "ts-toolbelt";

const query = "/home?name=dimamay&age=21";

type Query = typeof query;

// tách query

type SeconQueryPart = String.Split<Query, "?">[1];
type QueryElement = String.Split<SeconQueryPart, "&">;

type QueryParam = {
  [Q in QueryElement[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[QueryElement[number]];

const Results: Union.Merge<QueryParam> = {
  name: "dimamay",
  age: "21",
};
console.log("🚀 ~ Results:", Results);
