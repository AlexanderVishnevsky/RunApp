import * as React from 'react';
import { AppViewInterface } from './interfaces/AppViewInterface';
import { useStyles } from './styles/AppStyle';
import Layout from './components/common/Layout';
import AppBar from './components/AppBar/AppBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

const App = (): JSX.Element => {
    const classes = useStyles();
    const [appView, setAppView] = React.useState<AppViewInterface>('desktop');

    React.useEffect(() => {
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const checkScreenSize = () => {
        const width = window.innerWidth;
        return width < 728 ? setAppView('mobile') : setAppView('desktop');
    };

    return (
        <div className={classes.layout}>
            <AppBar appView={appView} />
            <Layout>
                <Router>
                    <Route path="/login">
                        <AuthPage />
                    </Route>
                </Router>
            </Layout>
        </div>
    );
};

export default App;
