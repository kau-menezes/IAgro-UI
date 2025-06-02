import '@mantine/core/styles.css';

import { Outlet } from "react-router";
import { UserContextProvider } from "./contexts/user.context";
import { MantineProvider } from "@mantine/core";
import { Notifier } from './components/feedback/notifier';

export function App() {
    return(
        <MantineProvider>
            <UserContextProvider>
                <Outlet/>
                <Notifier/>
            </UserContextProvider>
        </MantineProvider>
    )
}