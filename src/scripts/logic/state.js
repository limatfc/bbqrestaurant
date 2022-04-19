export function editState(state, id, inputedData) {
  const stateCopy = [...state];
  inputedData.id = id;
  let findIndex = stateCopy.findIndex((item) => item.id === id);
  stateCopy.splice(findIndex, 1, inputedData);
  return stateCopy;
}

export function addState(state, id, inputedData) {
  const stateCopy = [...state];
  inputedData.id = id;
  stateCopy.push(inputedData);
  return stateCopy;
}

export function deleteState(state, id) {
  const stateCopy = [...state];
  let findIndex = stateCopy.findIndex((item) => item.id === id);
  stateCopy.splice(findIndex, 1);
  return stateCopy;
}
