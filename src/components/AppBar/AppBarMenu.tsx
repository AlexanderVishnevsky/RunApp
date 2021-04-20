import { IconButton } from '@material-ui/core';
import React, { SyntheticEvent } from 'react';
import { PagesInterface } from '../../interfaces/PagesInterface';
import { AntTab, AntTabs } from '../../styles/AppBar/AppBarMenuStyle';
import { FilterIcon } from '../../static/FilterIcon';
import { useLocation } from 'react-router-dom';
import { AppViewInterface } from '../../interfaces/AppViewInterface';
import { MenuIcon } from '../../static/MenuIcon';
import MobileMenu from './MobileMenu';

const AppBarMenu = ({
    appView,
    activePage,
    handleChangeActivePage,
    handleToggleFilterBar,
    isShowMobileMenu,
    handleToggleMobileMenu,
}: {
    appView: AppViewInterface;
    activePage: PagesInterface;
    handleChangeActivePage: (event: SyntheticEvent<Element, Event>, page: PagesInterface) => void;
    handleToggleFilterBar: () => void;
    isShowMobileMenu: boolean;
    handleToggleMobileMenu: () => void;
}): JSX.Element => {
    const location = useLocation();
    return (
        <div style={{ display: 'flex' }}>
            {appView === 'desktop' && (
                <AntTabs value={activePage} onChange={handleChangeActivePage} textColor="inherit">
                    <AntTab label="jogs" value={'/jogs'} />
                    <AntTab label="info" value={'/info'} />
                    <AntTab label="contact us" value={'/contactus'} />
                </AntTabs>
            )}
            <IconButton
                onClick={handleToggleFilterBar}
                style={{ visibility: location.pathname === '/jogs' ? 'visible' : 'hidden' }}
            >
                <FilterIcon />
            </IconButton>
            {appView === 'mobile' && (
                <IconButton onClick={handleToggleMobileMenu}>
                    <MenuIcon />
                </IconButton>
            )}
            {isShowMobileMenu && (
                <MobileMenu
                    activePage={activePage}
                    handleChangeActivePage={handleChangeActivePage}
                    isShowMobileMenu={isShowMobileMenu}
                    handleToggleMobileMenu={handleToggleMobileMenu}
                />
            )}
        </div>
    );
};

export default AppBarMenu;
