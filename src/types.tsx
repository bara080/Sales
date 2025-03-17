import { JSX } from "react";
export type SideNavItem = {
    title: string;
    path: string;
    icon?: () => JSX.Element;  // Always a function returning JSX
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};
