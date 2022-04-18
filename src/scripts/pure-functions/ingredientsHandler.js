export function ingredientsHandler(item) {
  const oneString = [item];
  const multipleStrings = oneString[0].split(",");
  return multipleStrings;
}
