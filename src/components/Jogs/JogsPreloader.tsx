import { useStyles } from '../../styles/Jogs/JogItemStyle';
import React from 'react';
import { Avatar, Grow, Skeleton } from '@material-ui/core';

/**
 * Preloader skeleton list for JogList
 * @constructor
 */
const JogsPreloader = (): JSX.Element => {
    const classes = useStyles();
    return (
        <>
            {[...Array(5)].map((e, index) => (
                <Grow key={index} in={true} {...{ timeout: 1000 }} timeout={500 + index * 100}>
                    <div key={index} className={classes.jogItemLayoutPreloader}>
                        <div className={classes.firstRow}>
                            <Skeleton variant="circular" width={80}>
                                <Avatar />
                            </Skeleton>
                        </div>
                        <div>
                            <Skeleton width={140} height={50} />
                            <Skeleton width={100} height={30} />
                        </div>
                    </div>
                </Grow>
            ))}
        </>
    );
};

export default JogsPreloader;
