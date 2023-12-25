import { useLoaderData } from "react-router-dom";
import { User } from "../types/User";
import { Card } from "@mantine/core";


const Users = () => {
  // @ts-expect-error - users type is not defined
  const {users} = useLoaderData();
  const usersList = users as User[];

    return (
        <div>
            {usersList.length > 0 ? usersList.map((user: User) => {
                return (
                  <Card key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                  </Card>
                )
            }
            ) : <h1>No users</h1>}
        </div>
    )
}

export default Users;