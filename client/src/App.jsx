import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import apiService from './services/apiService'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Home from './components/Home'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from './components/Menu';
import PublishIcon from '@material-ui/icons/Publish';

const drawerWidth = 240;

const authNavs = [
  {
    label: "Logout",
    pathname: "/logout",
    icon: PublishIcon
  }
];

class App extends React.Component {
  state = { currentUser: apiService.getCurrentUser(), open: false }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  onLoginSuccess(user) {
    this.setState({ currentUser: apiService.getCurrentUser() })
  }

  logout() {
    apiService.logout()
    this.setState({ currentUser: null })
  }

  render() {
    const { classes, theme } = this.props;
    const { currentUser } = this.state;
    console.log(this.state.currentUser);

    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.open,
                })}
              >
                <ChevronRightIcon />
              </IconButton>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to='/' className={classes.link}>
                    <span className={classes.tagline}>PoC</span>
                  </Link>
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {Menu.map((item, index) => (
                <ListItem key={index} component={Link} to={{ pathname: item.pathname }} button>
                  <ListItemIcon>{<item.icon />}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
            {authNavs.map((item, index) => (
              <ListItem key={index} component={Link} to={{ pathname: item.pathname }} button>
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route
                path="/login"
                render={(props) => {
                  return <Login {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
                }}
              />
              <Route
                path="/logout"
                render={(props) => {
                  return <Logout onLogout={this.logout.bind(this)} />
                }}
              />
              <Route
                path="/register"
                render={(props) => {
                  return <Register {...props} onRegisterSuccess={this.onLoginSuccess.bind(this)} />
                }}
              />
              <Route
                path="/"
                render={() => {
                  return currentUser ? <Home /> : <Redirect to="/login" />
                }}
              />
              {/* <Route path="/" component={Home} /> */}
            </Switch>
          </main>
        </div>

    )
  }
}
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10
  },
});


App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
