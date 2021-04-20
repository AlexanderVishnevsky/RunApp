import { Slide, Typography } from '@material-ui/core';
import React from 'react';
import { RunIcon } from '../../static/RunIcon';
import { useStyles } from '../../styles/Jogs/JogItemStyle';
import { JogListResponseInterface } from '../../interfaces/JogListResponseInterface';
import { dateFormatter } from '../../api/dateFormatter';
import { useHistory } from 'react-router-dom';

const JogItem = ({ item, index }: { item: JogListResponseInterface; index: number }): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    // Formatted speed km/h
    const formattedSpeed = Math.round((item.distance * 60) / item.time);

    return (
        <Slide direction="left" in={true} timeout={index < 10 ? 500 + index * 100 : 0}>
            <div
                className={classes.jogItemLayout}
                onClick={() =>
                    history.push({
                        pathname: '/jogs/edit',
                        state: { ...item, date: dateFormatter().FromUnixToString(item.date) },
                    })
                }
            >
                <div className={classes.firstRow}>
                    <RunIcon />
                </div>
                <div>
                    <Typography variant={'subtitle2'}>{dateFormatter().FromUnixToString(item.date)}</Typography>
                    <Typography variant={'body1'}>
                        <b>Speed:</b> {formattedSpeed}
                    </Typography>
                    <Typography variant={'body1'}>
                        <b>Distance:</b> {item.distance} km
                    </Typography>
                    <Typography variant={'body1'}>
                        <b>Time:</b> {item.time} min
                    </Typography>
                </div>
            </div>
        </Slide>
    );
};

export default JogItem;
