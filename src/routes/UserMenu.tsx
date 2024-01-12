import { Avatar, Menu, rem } from "@mantine/core";
import { getAvatar } from "../queries/getAvatar";
import Pocketbase from 'pocketbase';
import { IconSettings, IconUser } from "@tabler/icons-react";

const base_url = import.meta.env.VITE_BASE
const pb = new Pocketbase(base_url);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ava: any = await getAvatar();

const UserMenu = () => {
  const a = pb.files.getUrl(ava, ava.avatar)

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar src={a} alt="Avatar" size={"md"} radius={"sm"} style={{cursor: 'pointer'}} />
      </Menu.Target>
      <Menu.Dropdown>
      <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}>
          User
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMenu;