import { IconButton } from '@material-ui/core';
import React, { SyntheticEvent } from 'react';
import { PagesInterface } from '../../interfaces/PagesInterface';
import { AntTab, AntTabs } from '../../styles/AppBar/AppBarMenuStyle';
import { FilterIcon } from '../../static/FilterIcon';
import { useLocation } from 'react-router-dom';

const AppBarMenu = ({
    activePage,
    handleChangeActivePage,
    handleToggleFilterBar,
}: {
    activePage: PagesInterface;
    handleChangeActivePage: (event: SyntheticEvent<Element, Event>, page: PagesInterface) => void;
    handleToggleFilterBar: () => void;
}): JSX.Element => {
    const location = useLocation();
    return (
        <div style={{ display: 'flex' }}>
            <AntTabs value={activePage} onChange={handleChangeActivePage} textColor="inherit">
                <AntTab label="jogs" value={'jogs'} />
                <AntTab label="info" value={'info'} />
                <AntTab label="contact us" value={'contactus'} />
            </AntTabs>
            <IconButton
                onClick={handleToggleFilterBar}
                style={{ visibility: location.pathname === '/jogs' ? 'visible' : 'hidden' }}
            >
                <FilterIcon />
            </IconButton>
        </div>
    );
};

export default AppBarMenu;
