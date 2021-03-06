import JogItem from './JogItem';
import { useStyles } from '../../styles/Jogs/JogListStyle';
import { JogListResponseInterface } from '../../interfaces/JogListResponseInterface';
import React from 'react';

/**
 * List of jogs
 * -------------
 * @Important
 * index in map used olly for animations
 * for key used jog_id: number;
 * @param jogList
 */
const JogList = ({ jogList }: { jogList: JogListResponseInterface[] }): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.jogListLayout}>
            {jogList.map((item: JogListResponseInterface, index: number) => (
                <JogItem key={item.id} item={item} index={index} />
            ))}
        </div>
    );
};

export default JogList;
