import { createContext, useState } from "react";
import { getUserSessionFromLocal } from "../utils/user-session";

interface IUser {
  access: boolean;
}
interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

const defaultValue = {
  user: { access: getUserSessionFromLocal() },
  setUser: (user: IUser) => {},
};
export const UserContext = createContext<IUserContext>(defaultValue);

const UserContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser>({
    access: getUserSessionFromLocal(),
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
// Et3rnalLif3Pro
