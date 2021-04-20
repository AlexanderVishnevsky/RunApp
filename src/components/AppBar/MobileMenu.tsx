import { Dialog, Slide, Typography, useTheme } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import React, { SyntheticEvent } from 'react';
import { useStyles } from '../../styles/AppBar/AppBarStyle';
import { LogoIcon } from '../../static/LogoIcon';
import { MobileTab, MobileTabs } from '../../styles/AppBar/AppBarMenuStyle';
import { PagesInterface } from '../../interfaces/PagesInterface';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MobileMenu = ({
    isShowMobileMenu,
    handleToggleMobileMenu,
    activePage,
    handleChangeActivePage,
}: {
    isShowMobileMenu: boolean;
    handleToggleMobileMenu: () => void;
    activePage: PagesInterface;
    handleChangeActivePage: (event: SyntheticEvent<Element, Event>, page: PagesInterface) => void;
}): JSX.Element => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Dialog fullScreen open={isShowMobileMenu} onClose={handleToggleMobileMenu} TransitionComponent={Transition}>
            <div className={classes.appBarMobileMenuStyle}>
                <LogoIcon color={theme.palette.primary.main} />
                <div className={classes.divCloseButton}>
                    <div className={classes.closeButton} onClick={handleToggleMobileMenu}>
                        <Typography variant={'h3'}>+</Typography>
                    </div>
                </div>
            </div>
            <MobileTabs orientation="vertical" value={activePage} onChange={handleChangeActivePage}>
                <MobileTab label="jogs" value={'/jogs'} />
                <MobileTab label="info" value={'/info'} />
                <MobileTab label="contact us" value={'/contactus'} />
            </MobileTabs>
        </Dialog>
    );
};

export default MobileMenu;
