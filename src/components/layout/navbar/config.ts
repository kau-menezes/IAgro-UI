import { IconHome } from "@tabler/icons-react";
import type { INavbarItemProps } from "./item";
import { AppRoutes } from "../../../constants/app-routes";

export const navbarItems: INavbarItemProps[] = [
    {
        title: "Home",
        link: AppRoutes.DASHBOARD,
        Icon: IconHome,
    },
];
