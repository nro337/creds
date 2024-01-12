import { Navigate, useLoaderData } from "react-router-dom";
import Pocketbase from 'pocketbase';
import { Cred } from "../types/Cred";
import { Card } from "@mantine/core";

const Creds = () => {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);

  // @ts-expect-error - users type is not defined
  const {creds} = useLoaderData();
  const credsList = creds as Cred[];

  if (!pb.authStore.isValid) {
    return <Navigate to="/login" replace={true} />;
  }

  console.log(credsList)

    return (
      <div>
      {credsList.length > 0 ? credsList.map((cred: Cred) => {
          return (
            <Card key={cred.id}>
              <h1>{cred.cert_id}</h1>
              <h2>{cred.date_issued}</h2>
              <h2>{cred.expiration_date}</h2>
            </Card>
          )
      }
      ) : <h1>No users</h1>}
  </div>
    )
}

export default Creds;