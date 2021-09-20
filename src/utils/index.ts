export function clone<T>(obj: T): T {
  // clones plain objects without keeping type
  return JSON.parse(JSON.stringify(obj)) as T;
}