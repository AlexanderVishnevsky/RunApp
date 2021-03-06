import { LogoIcon } from '../../static/LogoIcon';
import { useStyles } from '../../styles/AppBar/AppBarStyle';
import { PagesInterface } from '../../interfaces/PagesInterface';
import AppBarMenu from './AppBarMenu';
import React from 'react';
import FilterJogs from '../Jogs/FilterJogs';
import { ButtonBase, Collapse } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { filterIntervalInterface } from '../../interfaces/filterIntervalInterface';
import { useApplicationLayout } from '../../api/useApplicationLayout';

const AppBar = (props: {
    filterInterval: filterIntervalInterface;
    setFilterInterval: React.Dispatch<React.SetStateAction<filterIntervalInterface>>;
}): JSX.Element => {
    const classes = useStyles();
    const [showFilterBar, setShowFilterBar] = React.useState(false);
    const [activePage, setActivePage] = React.useState<PagesInterface>('/jogs');
    const history = useHistory();
    const location = useLocation();
    const [isShowMenu, setShowMenu] = React.useState(false);
    const [isShowMobileMenu, setIsShowMobileMenu] = React.useState(false);
    const appView = useApplicationLayout();

    /**
     * Check what to show
     */
    React.useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setShowMenu(true);
        } else {
            // set initial state
            setShowMenu(false);
            setShowFilterBar(false);
            props.setFilterInterval({ dateFrom: '', dateTo: '' });
            setActivePage('/jogs');
        }
        switch (location.pathname) {
            case '/jogs/add': {
                setShowFilterBar(false);
                props.setFilterInterval({ dateFrom: '', dateTo: '' });
                setActivePage('');
                break;
            }
            case '/jogs/edit': {
                setShowFilterBar(false);
                props.setFilterInterval({ dateFrom: '', dateTo: '' });
                setActivePage('');
                break;
            }
            case '/jogs': {
                setActivePage('/jogs');
                break;
            }
            case '/info': {
                setShowFilterBar(false);
                props.setFilterInterval({ dateFrom: '', dateTo: '' });
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

    const handleToggleMobileMenu = () => {
        if (isShowMobileMenu) {
            props.setFilterInterval({ dateFrom: '', dateTo: '' });
        }
        setIsShowMobileMenu((prevState: boolean) => !prevState);
    };

    const handleChangeActivePage = (event: React.SyntheticEvent<Element, Event>, page: PagesInterface) => {
        props.setFilterInterval({ dateFrom: '', dateTo: '' });
        history.push(page);
        setActivePage(page);
    };

    const renderLoggedInAppBar = (): JSX.Element => (
        <>
            <div className={appView === 'mobile' ? classes.appBarMobileStyle : classes.appBarStyle}>
                <ButtonBase disableTouchRipple disableRipple onClick={() => history.push('/jogs')}>
                    <LogoIcon />
                </ButtonBase>
                <AppBarMenu
                    activePage={activePage}
                    handleChangeActivePage={handleChangeActivePage}
                    handleToggleFilterBar={handleToggleFilterBar}
                    isShowMobileMenu={isShowMobileMenu}
                    handleToggleMobileMenu={handleToggleMobileMenu}
                />
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
