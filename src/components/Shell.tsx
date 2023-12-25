import { AppShell, ScrollArea } from "@mantine/core"
import { Outlet } from "react-router-dom";

const Shell = () => {

  return (
    <AppShell navbar={{ width: 200, breakpoint: "xs" }}>
    <AppShell.Navbar>
      <AppShell.Section>Navbar header</AppShell.Section>
      <AppShell.Section grow component={ScrollArea}>
        Navbar main section, it will
      </AppShell.Section>
      <AppShell.Section>
        Navbar footer – always at the bottom
      </AppShell.Section>
    </AppShell.Navbar>
    <AppShell.Main>
      Main
      <Outlet />
    </AppShell.Main>
  </AppShell>
  )
}

export default Shell;