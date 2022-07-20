export default function capitalize(string) {
  const firstChar = string.charAt(0);
  const firstCharCaptialized = firstChar.toUpperCase();
  const result = firstCharCaptialized + string.slice(1);
  return result;
}
