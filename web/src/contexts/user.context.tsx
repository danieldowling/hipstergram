import { createContext, useEffect } from 'react';
import httpService from './../services/base-http.service';

export interface User {
  accessToken?: string | null;
}

const DefaultUserState: User = {
  accessToken: null,
};

export const UserContext = createContext({
  user: DefaultUserState
});

const UserContextProvider = (props: any) => {
  const http = new httpService();
  let user: User = DefaultUserState;

  useEffect(() => {
    async function getAccessToken() {
      try {
        const accessToken = await http.accessToken;
        user = { accessToken };
        console.log({user});
      } catch(error) {
        console.log({error})
      }
    }
    getAccessToken();
  })
 

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
