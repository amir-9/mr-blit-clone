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

export const headerBgImageItems = [
  {
    name: "flight",
    width: 497,
    height: 114,
    src: "/images/header/flight-desktop.svg",
  },
  {
    name: "train",
    width: 629,
    height: 79,
    src: "/images/header/train-desktop.svg",
  },
  {
    name: "bus",
    width: 327,
    height: 93,
    src: "/images/header/bus-desktop.svg",
  },
  {
    name: "taxi",
    width: 224,
    height: 74,
    src: "/images/header/taxi-desktop.svg",
  },
  {
    name: "ship",
    width: 399,
    height: 173,
    src: "/images/header/ship-desktop.svg",
  },
];
