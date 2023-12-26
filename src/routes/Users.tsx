import { Navigate, useLoaderData } from "react-router-dom";
import { User } from "../types/User";
import { Card } from "@mantine/core";
import Pocketbase from 'pocketbase';


const Users = () => {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);
  // const navigate = useNavigate();

  // @ts-expect-error - users type is not defined
  const {users} = useLoaderData();
  const usersList = users as User[];

  if (!pb.authStore.isValid) {
    // navigate('/login', {replace: true});
    return <Navigate to="/login" replace={true} />;
  }

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