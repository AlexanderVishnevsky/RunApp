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
