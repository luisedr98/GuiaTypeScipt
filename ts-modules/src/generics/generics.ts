export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericArrow = <T>(arg: T): T => arg;
