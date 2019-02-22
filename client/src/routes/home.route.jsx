import HomeIcon from '@material-ui/icons/Home';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PublishIcon from '@material-ui/icons/Publish';
import HomePage from "../views/Home/Home.jsx";
import OperationsPage from "../views/Operations/Operations.jsx";
import Notifications from '../components/snackbar/Notifications.jsx'
const homeRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Home",
    icon: HomeIcon,
    component: HomePage
  },
  {
    path: "/operations",
    sidebarName: "Operations",
    navbarName: "Operations",
    icon: LocalShippingIcon,
    component: OperationsPage
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: LocalShippingIcon,
    component: Notifications
  },
];

export default homeRoutes;