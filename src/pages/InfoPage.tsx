import { Grow, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles/pages/AuthPageStyle';
import { useApplicationLayout } from '../api/useApplicationLayout';

const InfoPage = (): JSX.Element => {
    const classes = useStyles();
    const appView = useApplicationLayout();
    return (
        <Grow in={true} {...{ timeout: 500 }}>
            <div className={classes.root}>
                <div className={appView == 'desktop' ? classes.layoutWithoutBackground : classes.readableLayoutMobile}>
                    <Typography color={'primary'} variant={'h3'}>
                        INFO
                    </Typography>
                    <br />
                    <Typography variant={'body1'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </Typography>
                    <br />
                    <Typography variant={'body1'}>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using `Content here, content here`, making it look like
                        readable English.
                    </Typography>
                </div>
            </div>
        </Grow>
    );
};

export default InfoPage;
