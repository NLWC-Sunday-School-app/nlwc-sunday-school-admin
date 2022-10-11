export const saveUserSessionToLocal = () => {
  const localObject = { timeStamp: Date.now() };
  localStorage.setItem("nlwcadmin", JSON.stringify(localObject));
};

export const getUserSessionFromLocal = () => {
  // Delete token after 6 hours. 21600000 = 6 hours in miliseconds
  if (
    JSON.parse(localStorage.getItem("nlwcadmin") || "{}").timeStamp + 21600000 >
    Date.now()
  ) {
    return true;
  }
  return false;
};
