export default (key: any, obj: any) => {
  return obj[key] === undefined ? obj.default : obj[key];
};
