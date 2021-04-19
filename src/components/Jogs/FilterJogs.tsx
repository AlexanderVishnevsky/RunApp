import { useStyles } from '../../styles/Jogs/FilterJogsStyle';
import { Fade, InputBase, Typography } from '@material-ui/core';

const FilterJogs = ({ showFilterBar }: { showFilterBar: boolean }): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.filterBody}>
            <Fade in={showFilterBar} style={{ transitionDelay: showFilterBar ? '300ms' : '0ms' }}>
                <div className={classes.filterLayout}>
                    <div className={classes.firstRow}>
                        <Typography>Date from</Typography>
                        <InputBase className={classes.textField} />
                    </div>
                    <div className={classes.divider} />
                    <div className={classes.secondRow}>
                        <Typography>Date to</Typography>
                        <InputBase className={classes.textField} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default FilterJogs;
