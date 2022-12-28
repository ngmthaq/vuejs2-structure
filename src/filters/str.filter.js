export const uppercase = value => {
  if (!value || typeof value !== "string") return "";
  return value.toUpperCase();
};

export const lowercase = value => {
  if (!value || typeof value !== "string") return "";
  return value.toLowerCase();
};
