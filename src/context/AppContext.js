import { createContext } from 'react';
//import { LOAD_ALL_COUNTRIES } from '../graphql/queries';
//import { useQuery } from '@apollo/client';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {

    return (
        <AppContext.Provider value={{  }}>{ children }</AppContext.Provider>
    );
};