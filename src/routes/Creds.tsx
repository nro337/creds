import { Navigate, useLoaderData } from "react-router-dom";
import Pocketbase from "pocketbase";
import { Cred } from "../types/Cred";
import CredsTable from "../components/CredsTable";
import { Center } from "@mantine/core";

const Creds = () => {
  const base_url = import.meta.env.VITE_BASE;
  const pb = new Pocketbase(base_url);

  // @ts-expect-error - users type is not defined
  const { creds } = useLoaderData();
  const credsList = creds as Cred[];

  if (!pb.authStore.isValid) {
    return <Navigate to="/login" replace={true} />;
  }

  console.log(credsList);

  return (
    <div style={{ paddingTop: 32 }}>
      <Center>
        <h1>Your Credentials</h1>
      </Center>
      {credsList.length > 0 && <CredsTable creds={credsList} />}
    </div>
  );
};

export default Creds;
