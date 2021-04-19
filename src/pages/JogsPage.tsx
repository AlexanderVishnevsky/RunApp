import JogList from '../components/Jogs/JogList';
import { Fab, Typography, useTheme, Zoom } from '@material-ui/core';
import { useStyles } from '../styles/pages/JogsPageStyle';
import { useHistory, useLocation } from 'react-router-dom';
import React from 'react';
import { useRequest } from '../api/useRequest';
import { JogListResponseInterface } from '../interfaces/JogListResponseInterface';
import JogsPreloader from '../components/Jogs/JogsPreloader';

const JogsPage = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const { getData } = useRequest();
    const [jogList, setJogList] = React.useState<JogListResponseInterface[] | []>([]);
    const [loadingJogList, setLoadingJogList] = React.useState<boolean>(true);

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    React.useEffect(() => {
        getData()
            .then((jogs: JogListResponseInterface[]) => {
                setJogList(jogs);
                setLoadingJogList(false);
            })
            .catch((e) => {
                setLoadingJogList(false);
            });
    }, []);

    return (
        <>
            <div className={classes.layout}>
                {loadingJogList ? (
                    <JogsPreloader />
                ) : (
                    <>
                        <JogList jogList={jogList} />
                        <div className={classes.addJogButton}>
                            <Zoom
                                in={location.pathname !== 'jogs'}
                                timeout={transitionDuration}
                                style={{
                                    transitionDelay: `${location.pathname !== 'jogs' ? transitionDuration.exit : 0}ms`,
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
                    </>
                )}
            </div>
        </>
    );
};

export default JogsPage;
