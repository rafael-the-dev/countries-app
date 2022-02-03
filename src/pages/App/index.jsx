import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
//import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';

const App = () => {
    const theme = createTheme();
    const Header = loadable(() => import(/* webpackChunkName: "Header" */ '../../components/Header'));
    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Header />
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;