import buttonsMapping from "../../Button/mapping";

const mapping = (data) => {
  if (!data) return "";
  const primary = data?.primary && buttonsMapping(data?.primary);

  return {
    theme: data?.theme,
    primary,
  };
};
export default mapping;
