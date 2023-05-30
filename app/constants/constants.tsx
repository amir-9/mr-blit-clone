import NavbarIcons from "../components/icons/NavbarIcons";
import HeaderIcons from "../components/icons/HeaderIcons";

type NavItemType = {
  title: string;
  navbarIcon: any;
};

export const navbarItems: Array<NavItemType> = [
  {
    title: "بلیط هواپیما",
    navbarIcon: <NavbarIcons name="planeDeparture" fill="#000" />,
  },
  {
    title: "رزرو هتل",
    navbarIcon: <NavbarIcons name="hotel" fill="#000" />,
  },
  {
    title: "بسته سفر",
    navbarIcon: <NavbarIcons name="suitcaseRolling" fill="#000" />,
  },
  {
    title: "بلیط قطار",
    navbarIcon: <NavbarIcons name="train" fill="#000" />,
  },
  {
    title: "بلیط اتوبوس",
    navbarIcon: <NavbarIcons name="bus" fill="#000" />,
  },
  {
    title: "بلیط سواری",
    navbarIcon: <NavbarIcons name="car" fill="#000" />,
  },
];
