import HomeIcon from '@material-ui/icons/Home';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PublishIcon from '@material-ui/icons/Publish';

const Menu = [
  {
    label: "Home",
    pathname: "/",
    icon: HomeIcon
  },
  {
    label: "Dashboard",
    pathname: "/dashboard",
    icon: LocalShippingIcon
  },
  {
    label: "Login",
    pathname: "/login",
    icon: PublishIcon
  }
];

export default Menu;