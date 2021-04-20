import { useStyles } from '../../styles/Jogs/FilterJogsStyle';
import { Fade, InputBase, Typography } from '@material-ui/core';
import React from 'react';
import { filterIntervalInterface } from '../../interfaces/filterIntervalInterface';

const FilterJogs = ({
    showFilterBar,
    filterInterval,
    setFilterInterval,
}: {
    showFilterBar: boolean;
    filterInterval: filterIntervalInterface;
    setFilterInterval: React.Dispatch<React.SetStateAction<filterIntervalInterface>>;
}): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.filterBody}>
            <Fade in={showFilterBar} style={{ transitionDelay: showFilterBar ? '300ms' : '0ms' }}>
                <div className={classes.filterLayout}>
                    <div className={classes.firstRow}>
                        <Typography style={{ whiteSpace: 'nowrap' }}>Date from</Typography>
                        <InputBase
                            className={classes.textField}
                            inputProps={{ maxLength: 10 }}
                            value={filterInterval.dateFrom}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setFilterInterval({ ...filterInterval, dateFrom: event.target.value })
                            }
                        />
                    </div>
                    <div className={classes.divider} />
                    <div className={classes.secondRow}>
                        <Typography style={{ whiteSpace: 'nowrap' }}>Date to</Typography>
                        <InputBase
                            className={classes.textField}
                            inputProps={{ maxLength: 10 }}
                            value={filterInterval.dateTo}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setFilterInterval({ ...filterInterval, dateTo: event.target.value })
                            }
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default FilterJogs;
