import "./App.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { AppShell, MantineProvider, NavLink, ScrollArea } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { IconUserCircle, IconHome2, IconLogout } from '@tabler/icons-react'
import Pocketbase from 'pocketbase';

function App() {

  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);

  // if (!pb.authStore.isValid) {
  //   return <Navigate to="/login" replace={true} />;
  //   // return navigate('/login', {replace: true});
  // }

  return (
    <MantineProvider defaultColorScheme="auto">
      <AppShell navbar={{ width: 200, breakpoint: "xs" }}>
        <AppShell.Navbar>
          <AppShell.Section>Navigation</AppShell.Section>
          <AppShell.Section grow component={ScrollArea}>
          <NavLink
            href="/home"
            label="Home"
            leftSection={<IconHome2 size={24} strokeWidth={1.5} />}
            variant="subtle"
            active
            color="white"
            />
          <NavLink
            href="/users"
            label="Users"
            leftSection={<IconUserCircle size={24} strokeWidth={1.5} />}
            variant="subtle"
            active
            color="white"
          />
          <NavLink
            href="/logout"
            label="Logout"
            leftSection={<IconLogout size={24} strokeWidth={1.5} />}
            variant="subtle"
            active
            color="white"
          />
          </AppShell.Section>
          <AppShell.Section>
            
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
            {
              !pb.authStore.isValid && <Link to={'/login'}>Login</Link>
            }
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
