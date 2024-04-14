function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}
const [data, setData] = simpleUseState("cc");
setData("cccc");
console.log("🚀 ~ data:", data());
