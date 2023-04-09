export default function getSpecialOptions(object) {
  const options = [];
  for (const action of object.special) {
    const { description = 'Описание недоступно' } = action;
    action.description = description;
    options.push(action);
  }
  return options;
}
