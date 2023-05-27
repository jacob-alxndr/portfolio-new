import buttonsMapping from "../Button/mapping";
const mapping = (data) => {
  if (!data) return "";
  const links = data?.links && buttonsMapping(data?.links);
  return {
    ...data,
    links,
  };
};

export default mapping;
