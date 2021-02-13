export const findClassAtrr = (component, attr) => {
  const wrapper = component.find(`.${attr}`);
  return wrapper;
};
