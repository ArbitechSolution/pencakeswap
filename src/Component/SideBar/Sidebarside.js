import React from 'react';
import './SideBar.css'
// import DashBoardMain from '../DashBoard';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
// import Withdraw from '../Withdraw/Withdraw'
// import Wallet from '../Wallet/Wallet'
// import Swapping from '../Swapping/Swapping'
// import Transaction from '../Transction/Transaction'
// import Stackes from '../Stackes';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillHome } from 'react-icons/ai'
import { RiArrowLeftRightFill } from 'react-icons/ri'
import { GoGraph } from 'react-icons/go'
import Homepage from '../Home/Homepage';
import Swap from '../Swap/Swap';
import Liquidity from '../Liquidity/Liquidity'
import Comedown from '../Comdown/Comedown';

// import Dashboard from '@mui/icons-material/Dashboard';
// import { Link } from 'react-router-dom';

const drawerWidth = 255;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(2)} + 1px)`,
    [theme.breakpoints.up('md')]: {
        width: `calc(${theme.spacing(6)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    borderColor: '4px solid red',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    // ...(open && {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({

        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className="">
            <Box sx={{ display: 'flex' }} className="" >

                <AppBar position="fixed" open={open}>
                    <Toolbar style={{ backgroundColor: "white" }}>
                        <IconButton

                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"

                            sx={{
                                zIndex: '1',
                                marginRight: '-70px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />


                        </IconButton>

                        <IconButton

                            aria-label="open drawer"
                            onClick={handleDrawerClose}
                            edge="start"
                            sx={{
                                zIndex: '0',
                                marginRight: '36px',
                                ...({ display: '' }),
                            }}
                        >
                            <MenuIcon />

                        </IconButton>


                        <img src="pancakeswap.png" alt="" width="150px" style={{ marginLeft: '1rem' }} />
                        <button className="btn conbtn">Connect</button>
                        <img className="scondimg" src="cr=w_365,h_365.png" alt="" width="35px" />
                    </Toolbar>

                </AppBar>

                <Drawer variant="permanent" open={open} >

                    {/* <Divider /> */}
                    <List style={{ color: " rgb(143, 128, 186)", backgroundColor: "white", marginTop: '5rem' }}>
                        {/* {['DashBoard', 'Shakes', 'Transcation', 'Widthdraw', 'Wallet', 'Swapping', 'LogOut'].map((text, index) => ( */}
                        {/* <LinkContainer  > */}
                        {/* <Link to="/dashboard"> */}
                        <ListItem button >
                            <ListItemIcon style={{ color: "rgb(143, 128, 186)", fontSize: '27px' }}>
                                <AiFillHome />
                            </ListItemIcon>
                            <ListItemText  > Pancake Home</ListItemText>
                        </ListItem>
                        {/* </Link> */}
                        {/* </LinkContainer> */}

                        {/* <Link to="/stacke" > */}
                        <ListItem button >
                            <ListItemIcon style={{ color: "rgb(143, 128, 186)", fontSize: '27px' }}>
                                {/* {index % 2 == 0 ? <DashboardIcon /> : <CompareArrowsIcon />} */}
                                <RiArrowLeftRightFill />
                            </ListItemIcon>
                            <ListItemText  > Trade</ListItemText>
                        </ListItem>
                        {/* </Link> */}

                        {/* <Link to="/transaction" > */}
                        <ListItem button >
                            <ListItemIcon style={{ color: "rgb(143, 128, 186)", fontSize: '27px' }}>
                                {/* {index % 2 == 0 ? <DashboardIcon /> : <CompareArrowsIcon />} */}

                                <GoGraph />
                            </ListItemIcon>
                            <ListItemText  > Swap Simualation Home</ListItemText>

                        </ListItem>
                        {/* </Link> */}




                    </List>

                    <List style={{ color: "white", backgroundColor: "white", borderColor: "red", height: '260px' }}>


                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ color: 'white' }} >
                    <DrawerHeader />

                    <Homepage />
                   
                    {/* <Liquidity/> */}
                    {/* <Swap/> */}
                    {/* <Switch> */}
                    {/* <Route exact path="/dashboard" component={DashBoardMain } /> */}
                    {/* </Switch> */}
                    {/* <DashBoardMain/>  */}
                    {/* <Stackes/> */}
                    {/* <Page/> */}
                    {/* <Transaction/> */}
                    {/* <Withdraw /> 
                     <Wallet/>
                    <Swapping/> */}



                </Box>
            </Box>
        </div>
    );
}