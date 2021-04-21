import * as React from 'react';
import { useStyles } from './styles/AppStyle';
import Layout from './components/common/Layout';
import AppBar from './components/AppBar/AppBar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import JogsPage from './pages/JogsPage';
import AddNewJogPage from './pages/AddNewJogPage';
import InfoPage from './pages/InfoPage';
import AboutPage from './pages/AboutPage';
import EditJogPage from './pages/EditJogPage';
import { filterIntervalInterface } from './interfaces/filterIntervalInterface';

const App = (): JSX.Element => {
    const classes = useStyles();
    const [filterInterval, setFilterInterval] = React.useState<filterIntervalInterface>({
        dateFrom: '',
        dateTo: '',
    });

    return (
        <BrowserRouter>
            <div className={classes.layout}>
                <AppBar filterInterval={filterInterval} setFilterInterval={setFilterInterval} />
                <Switch>
                    <Route path="/login">
                        <AuthPage />
                    </Route>
                    <Route
                        path="/"
                        render={() => (
                            <Layout>
                                <Route exact path="/" render={() => <Redirect to="/login" />} />
                                <Route path="/jogs" exact>
                                    <JogsPage filterInterval={filterInterval} />
                                </Route>
                                <Route path="/jogs/add" render={() => <AddNewJogPage />} />
                                <Route path="/jogs/edit" render={() => <EditJogPage />} />
                                <Route path="/info" render={() => <InfoPage />} />
                                <Route path="/contactus" render={() => <AboutPage />} />
                            </Layout>
                        )}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
