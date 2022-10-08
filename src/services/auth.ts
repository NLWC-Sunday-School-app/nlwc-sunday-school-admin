export const signin = (password: string) => {
  return password === process.env.REACT_APP_PASS;
};
