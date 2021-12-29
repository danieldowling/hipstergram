import { createContext } from 'react';
import httpService from './../services/base-http.service';

export interface User {
  accessToken?: string;
}

const DefaultUserState: User = {
  accessToken: '',
};

export const UserContext = createContext({
  user: DefaultUserState,
});

const UserContextProvider = (props: any) => {
  // const user: User = DefaultUserState;
  const http = new httpService();
  const accessToken = http.accessToken;
  const user = { accessToken };

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
