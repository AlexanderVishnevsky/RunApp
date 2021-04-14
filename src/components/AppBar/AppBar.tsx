import { LogoIcon } from '../../static/LogoIcon';
import { useStyles } from '../../styles/AppBar/AppBarStyle';
import { MenuIcon } from '../../static/MenuIcon';
import { AppViewInterface } from '../../interfaces/AppViewInterface';

const AppBar = ({ appView }: { appView: AppViewInterface }): JSX.Element => {
    debugger;
    const classes = useStyles();
    return (
        <div className={appView === 'mobile' ? classes.appBarMobileStyle : classes.appBarStyle}>
            <LogoIcon />
            {/*style={{ width: '28pt' }}*/}
            {appView === 'mobile' && <MenuIcon />}
        </div>
    );
};
export default AppBar;
