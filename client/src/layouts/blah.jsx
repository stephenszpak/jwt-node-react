// state = { currentUser: apiService.getCurrentUser(), open: false }

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   onLoginSuccess(user) {
//     this.setState({ currentUser: apiService.getCurrentUser() })
//   }

//   logout() {
//     apiService.logout()
//     this.setState({ currentUser: null })
//   }

//   render() {
//     const { classes, theme } = this.props;
//     const { currentUser } = this.state;
//     console.log(this.state.currentUser);

//     return (


//             <Switch>
//               <Route
//                 path="/login"
//                 render={(props) => {
//                   return <Login {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
//                 }}
//               />
//               <Route
//                 path="/logout"
//                 render={(props) => {
//                   return <Logout onLogout={this.logout.bind(this)} />
//                 }}
//               />
//               <Route
//                 path="/register"
//                 render={(props) => {
//                   return <Register {...props} onRegisterSuccess={this.onLoginSuccess.bind(this)} />
//                 }}
//               />
//               <Route
//                 path="/"
//                 render={() => {
//                   return currentUser ? <Home /> : <Redirect to="/login" />
//                 }}
//               />
//               {/* <Route path="/" component={Home} /> */}
//             </Switch>

//     )
//   }