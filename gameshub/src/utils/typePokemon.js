export const typePokemon = (data) => {
  const nameType = [];
  data.array.forEach((element) => {
    element.type.array.forEach((singleType) => {
      !nameType.includes(singleType.type.name) &&
        nameType.push(singleType.type.name);
    });
  });
  return nameType;
};
