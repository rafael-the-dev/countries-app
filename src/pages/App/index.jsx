import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';

const App = () => {
    const theme = createTheme();
    const Header = loadable(() => import(/* webpackChunkName: "Header" */ '../../components/Header'));
    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));
    const CountryDetailsPage = loadable(() => import(/* webpackChunkName: "CountryDetailsPage" */ '../CountryDetails'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <Router>
                            <Header />
                            <Routes>
                                <Route exact path="/countries/:id" element={<CountryDetailsPage />} />
                                <Route exact path="/" element={<HomePage />} />
                            </Routes>
                        </Router>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;