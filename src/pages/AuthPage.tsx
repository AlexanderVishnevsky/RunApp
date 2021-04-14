import { Button } from '@material-ui/core';
import { BearFaceIcon } from '../static/BearFaceIcon';
import { useStyles } from '../styles/pages/AuthPageStyle';

const AuthPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <BearFaceIcon />
            <Button className={classes.authButton}>Let me in</Button>
        </div>
    );
};

export default AuthPage;
