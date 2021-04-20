import JogList from '../components/Jogs/JogList';
import { Fab, Typography, useTheme, Zoom } from '@material-ui/core';
import { useStyles } from '../styles/pages/JogsPageStyle';
import { useHistory, useLocation } from 'react-router-dom';
import React from 'react';
import { useRequest } from '../api/useRequest';
import { JogListResponseInterface } from '../interfaces/JogListResponseInterface';
import JogsPreloader from '../components/Jogs/JogsPreloader';
import { filterIntervalInterface } from '../interfaces/filterIntervalInterface';
import EmptyJogList from '../components/Jogs/EmptyJogList';
import { dateFormatter } from '../api/dateFormatter';

const JogsPage = ({ filterInterval }: { filterInterval: filterIntervalInterface }): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const { getData } = useRequest();
    const [jogList, setJogList] = React.useState<JogListResponseInterface[] | []>([]);
    const [initialResArray, setInitialResArray] = React.useState<JogListResponseInterface[] | []>([]);
    const [loadingJogList, setLoadingJogList] = React.useState<boolean>(true);

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    React.useEffect(() => {
        getData()
            .then((jogs: JogListResponseInterface[]) => {
                setInitialResArray(jogs);
                if (filterInterval.dateFrom !== '' || filterInterval.dateTo !== '') {
                    checkFilterInterval(jogs);
                } else {
                    setJogList(jogs);
                }
                setLoadingJogList(false);
            })
            .catch((e) => {
                setLoadingJogList(false);
            });
    }, []);

    const checkFilterInterval = (jogArray: JogListResponseInterface[] | []) => {
        let tempArr = jogArray;
        if (filterInterval.dateFrom !== '') {
            const UNIXStartDate = dateFormatter().FromStringToUnix(filterInterval.dateFrom);
            tempArr = jogArray.filter((item: JogListResponseInterface) => {
                return filterInterval.dateFrom !== '' && UNIXStartDate <= item.date;
            });
        }
        if (filterInterval.dateTo !== '') {
            debugger;
            const UNIXEndDate = dateFormatter().FromStringToUnix(filterInterval.dateTo);
            tempArr = tempArr.filter((item: JogListResponseInterface) => {
                return filterInterval.dateTo !== '' && item.date <= UNIXEndDate;
            });
        }
        return tempArr;
    };

    React.useEffect(() => {
        debugger;
        if (filterInterval.dateFrom.length === 10 || filterInterval.dateTo.length === 10) {
            const res = checkFilterInterval(initialResArray);
            debugger;
            setJogList(res);
        } else if (filterInterval.dateFrom.length === 0 && filterInterval.dateTo.length === 0) {
            debugger;
            setJogList(initialResArray);
        }
    }, [filterInterval]);

    return (
        <>
            <div className={classes.layout}>
                {loadingJogList ? (
                    <JogsPreloader />
                ) : (
                    <>
                        {jogList.length !== 0 ? <JogList jogList={jogList} /> : <EmptyJogList />}
                        {jogList.length !== 0 && (
                            <div className={classes.addJogButton}>
                                <Zoom
                                    in={location.pathname !== 'jogs'}
                                    timeout={transitionDuration}
                                    style={{
                                        transitionDelay: `${
                                            location.pathname !== 'jogs' ? transitionDuration.exit : 0
                                        }ms`,
                                    }}
                                    unmountOnExit
                                >
                                    <Fab
                                        disableFocusRipple
                                        disableRipple
                                        disableTouchRipple
                                        classes={{ root: classes.fab }}
                                        onClick={() => {
                                            history.push('/jogs/add');
                                        }}
                                    >
                                        <Typography variant={'h3'}> + </Typography>
                                    </Fab>
                                </Zoom>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default JogsPage;
