const cpValue = <T>(
  a: T extends unknown[] ? "Cc Arry cut" : T,
  b: T extends unknown[] ? "Cc Arry cut" : T
): boolean => {
  return a === b;
};

cpValue(true, true);
cpValue("true", "true");
cpValue(1, 1);
