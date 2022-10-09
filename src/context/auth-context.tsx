import { createContext, useState } from "react";

interface IUser {
  access: boolean;
}
interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

const defaultValue = {
  user: { access: false },
  setUser: (user: IUser) => {},
};
export const UserContext = createContext<IUserContext>(defaultValue);

const UserContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser>({ access: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
