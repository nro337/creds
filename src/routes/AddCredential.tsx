import Pocketbase from 'pocketbase';
import { Navigate } from "react-router-dom";

const AddCredential = () => {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);
  // const navigate = useNavigate();

  if (!pb.authStore.isValid) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <h1>Add Credential</h1>
    </div>
  );
}

export default AddCredential;