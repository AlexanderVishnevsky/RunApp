import { createStyles, Tab, Tabs, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import { PagesInterface } from '../../interfaces/PagesInterface';

interface StyledTabProps {
    value: PagesInterface;
    label: string;
}

export const AntTabs = withStyles({
    indicator: {
        backgroundColor: '#FFFFFF',
    },
})(Tabs);

export const AntTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            textTransform: 'uppercase',
            color: '#FFFFFF',
            minWidth: 0,
            marginRight: theme.spacing(3),
        },
    }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

export const MobileTabs = withStyles({
    root: {
        width: '100%',
        height: '100%',
    },
    flexContainerVertical: { alignItems: 'center', justifyContent: 'space-around', height: '40%' },
    indicator: {
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
    },
})(Tabs);

export const MobileTab = withStyles(() =>
    createStyles({
        root: {
            textTransform: 'uppercase',
            fontSize: '25pt',
            minWidth: 0,
            alignItems: 'center',
        },
    }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
