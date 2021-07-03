import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Routing/PrivateRoute.js";
import PrivateScreen from "./Components/Screens/PrivateScreen.js";
import PrivateAdminScreen from "./Components/Screens/PrivateAdminScreen.js";
import PrivateAdminUsersScreen from "./Components/Screens/PrivateAdminUsersScreen.js";
import LoginScreen from "./Components/Screens/LoginScreen.js";
import RegisterScreen from "./Components/Screens/RegisterScreen.js";
import ForgotPasswordScreen from "./Components/Screens/ForgotPasswordScreen.js";
import PasswordResetScreen from "./Components/Screens/PasswordResetScreen.js";
import VolsScreen from "./Components/Screens/VolsScreen.js";
import VolsScreenUser from "./Components/Screens/VolsScreenUser.js";
import VolsScreenAdmin from "./Components/Screens/VolsScreenAdmin.js";
import OrganizedTripsAdminScreen from "./Components/Screens/OrganizedTripsAdminScreen.js";
import OrganizedTripsAdminScreen2 from "./Components/Screens/OrganizedTripsAdminScreen2.js";
import OrganizedTripsScreen from "./Components/Screens/OrganizedTripsScreen.js";
import OrganizedTripsUserScreen from "./Components/Screens/OrganizedTripsUserScreen.js";
import ChatScreen from "./Components/Screens/ChatScreen.js";
import ChatAdminScreen from "./Components/Screens/ChatAdminScreen.js";
import HomePageScreen from "./Components/Screens/HomepageScreen.js";
import HomePageAdminScreen from "./Components/Screens/HomepageAdminScreen.js";
import HomePageUserScreen from "./Components/Screens/HomepageUserScreen.js";




const  App =  () => {
  return (
    <Router>
      <div className="app" >
        <Switch>
          <Route exact path="/" component={HomePageScreen}/>
          <PrivateRoute exact path="/user" component={HomePageUserScreen}/>
          <PrivateRoute exact path="/user/profile" component={PrivateScreen}/>
          <PrivateRoute exact path="/user/flights" component={VolsScreenUser}/>
          <PrivateRoute exact path="/user/chat" component={ChatScreen}/>
          <PrivateRoute exact path="/user/organizedTrips" component={OrganizedTripsUserScreen}/>
          <PrivateRoute exact path="/admin" component={HomePageAdminScreen}/>
          <PrivateRoute exact path="/admin/profile" component={PrivateAdminScreen}/>
          <PrivateRoute exact path="/admin/users" component={PrivateAdminUsersScreen}/>
          <PrivateRoute exact path="/admin/flights" component={VolsScreenAdmin}/>
          <PrivateRoute exact path="/admin/chat" component={ChatAdminScreen}/>
          <PrivateRoute exact path="/admin/organizedTrips" component={OrganizedTripsAdminScreen}/>
          <PrivateRoute exact path="/admin/organizedTrips2" component={OrganizedTripsAdminScreen2}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
          <Route exact path="/passwordreset/:resetToken" component={PasswordResetScreen}/>
          <Route exact path="/flights" component={VolsScreen}/>
          <Route exact path="/organizedTrips" component={OrganizedTripsScreen}/>
          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
