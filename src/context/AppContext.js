import { createContext, useCallback, useEffect, useState } from 'react';
//import { LOAD_ALL_COUNTRIES } from '../graphql/queries';
//import { useQuery } from '@apollo/client';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {

    const [ theme, setTheme ] = useState({ isLightTheme: true });

    const toggleTheme = useCallback(() => setTheme(theme => ({ ...theme, isLightTheme: !theme.isLightTheme})), []);


    useEffect(() => {
        if(!localStorage.getItem('countries-app__isLightTheme')) {
            localStorage.setItem('countries-app__isLightTheme', JSON.stringify(false));
        }
    }, []);

    useEffect(() => {
        const stringifiedTheme = localStorage.getItem('countries-app__isLightTheme');
        if(stringifiedTheme) {
            const storedTheme = JSON.parse(stringifiedTheme);
            setTheme({ isLightTheme: storedTheme});
        }
    }, []);

    useEffect(() => {
        if(theme.isLightTheme) {
            document.querySelector('html').classList.remove('dark');
            //document.querySelector('html').classList.remove('dark-theme');
        } else {
            document.querySelector('html').classList.add('dark');
            //document.querySelector('html').classList.add('dark-theme');
        }
        localStorage.setItem('countries-app__isLightTheme', JSON.stringify(theme.isLightTheme));
    }, [ theme ])

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>{ children }</AppContext.Provider>
    );
};