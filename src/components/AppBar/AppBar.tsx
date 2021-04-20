import { LogoIcon } from '../../static/LogoIcon';
import { useStyles } from '../../styles/AppBar/AppBarStyle';
import { MenuIcon } from '../../static/MenuIcon';
import { AppViewInterface } from '../../interfaces/AppViewInterface';
import { PagesInterface } from '../../interfaces/PagesInterface';
import AppBarMenu from './AppBarMenu';
import React from 'react';
import FilterJogs from '../Jogs/FilterJogs';
import { ButtonBase, Collapse } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { filterIntervalInterface } from '../../interfaces/filterIntervalInterface';

const AppBar = (props: {
    appView: AppViewInterface;
    filterInterval: filterIntervalInterface;
    setFilterInterval: React.Dispatch<React.SetStateAction<filterIntervalInterface>>;
}): JSX.Element => {
    const classes = useStyles();
    const { appView } = props;
    const [showFilterBar, setShowFilterBar] = React.useState(false);
    const [activePage, setActivePage] = React.useState<PagesInterface>('/jogs');
    const history = useHistory();
    const location = useLocation();
    const [isShowMenu, setShowMenu] = React.useState(false);

    /**
     * Check what menu to show
     */
    React.useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setShowMenu(true);
        } else {
            // set initial state
            setShowMenu(false);
            setShowFilterBar(false);
            setActivePage('/jogs');
        }
        switch (location.pathname) {
            case '/jogs/add': {
                setShowFilterBar(false);
                setActivePage('');
                break;
            }
            case '/jogs/edit': {
                setShowFilterBar(false);
                setActivePage('');
                break;
            }
            case '/jogs': {
                setActivePage('/jogs');
                break;
            }
            case '/info': {
                setShowFilterBar(false);
                break;
            }
            case '/contactus': {
                setShowFilterBar(false);
                break;
            }
        }
    }, [location.pathname]);

    const handleToggleFilterBar = () => {
        if (showFilterBar) {
            props.setFilterInterval({ dateFrom: '', dateTo: '' });
        }
        setShowFilterBar((prevState: boolean) => !prevState);
    };

    const handleChangeActivePage = (event: React.SyntheticEvent<Element, Event>, page: PagesInterface) => {
        history.push(page);
        props.setFilterInterval({ dateFrom: '', dateTo: '' });
        setActivePage(page);
    };

    const renderLoggedInAppBar = (): JSX.Element => (
        <>
            <div className={appView === 'mobile' ? classes.appBarMobileStyle : classes.appBarStyle}>
                <ButtonBase disableTouchRipple disableRipple onClick={() => history.push('/jogs')}>
                    <LogoIcon />
                </ButtonBase>
                {appView === 'mobile' ? (
                    <MenuIcon />
                ) : (
                    <AppBarMenu
                        activePage={activePage}
                        handleChangeActivePage={handleChangeActivePage}
                        handleToggleFilterBar={handleToggleFilterBar}
                    />
                )}
            </div>
            <Collapse in={showFilterBar}>
                <FilterJogs showFilterBar={showFilterBar} {...props} />
            </Collapse>
        </>
    );

    return (
        <>
            {isShowMenu ? (
                renderLoggedInAppBar()
            ) : (
                <div className={appView === 'mobile' ? classes.appBarMobileStyle : classes.appBarStyle}>
                    <ButtonBase disableTouchRipple disableRipple onClick={() => history.push('/login')}>
                        <LogoIcon />
                    </ButtonBase>
                </div>
            )}
        </>
    );
};
export default AppBar;
