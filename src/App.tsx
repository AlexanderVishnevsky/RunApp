import * as React from 'react';
import { AppViewInterface } from './interfaces/AppViewInterface';
import { useStyles } from './styles/AppStyle';
import Layout from './components/common/Layout';
import AppBar from './components/AppBar/AppBar';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import JogsPage from './pages/JogsPage';
import AddNewJogPage from './pages/AddNewJogPage';
import InfoPage from './pages/InfoPage';
import AboutPage from './pages/AboutPage';
import EditJogPage from './pages/EditJogPage';
import { filterIntervalInterface } from './interfaces/filterIntervalInterface';

const App = (): JSX.Element => {
    const classes = useStyles();
    const [appView, setAppView] = React.useState<AppViewInterface>('desktop');
    const [filterInterval, setFilterInterval] = React.useState<filterIntervalInterface>({
        dateFrom: '',
        dateTo: '',
    });

    React.useEffect(() => {
        checkScreenSize();
        const handleScroll = (e: any): void => {
            const classList = e.target.classList;
            const className = classes.onScroll;

            if (classList && !classList.contains(className)) {
                classList.add(className);

                setTimeout(() => e.target.classList.remove(className), 3000);
            }
        };
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const checkScreenSize = () => {
        const width = window.innerWidth;
        return width < 728 ? setAppView('mobile') : setAppView('desktop');
    };

    return (
        <BrowserRouter>
            <div className={classes.layout}>
                <AppBar appView={appView} filterInterval={filterInterval} setFilterInterval={setFilterInterval} />
                <Switch>
                    <Route path="/login" component={AuthPage} />
                    <Route
                        path="/"
                        render={() => (
                            <Layout>
                                <Route path="/jogs" exact>
                                    <JogsPage filterInterval={filterInterval} />
                                </Route>
                                <Route path="/jogs/add" component={AddNewJogPage} />
                                <Route path="/jogs/edit" component={EditJogPage} />
                                <Route path="/info" component={InfoPage} />
                                <Route path="/contactus" component={AboutPage} />
                            </Layout>
                        )}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
