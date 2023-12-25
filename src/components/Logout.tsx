import { useNavigate } from "react-router-dom";
import Pocketbase from 'pocketbase';

const Logout = () => {

  const navigate = useNavigate();

  async function logout() {
    const base_url = import.meta.env.VITE_BASE
    const pb = new Pocketbase(base_url);
    await pb.authStore.clear();
    return navigate('/login', {replace: true});
  }

  logout();


  return (
    <>
      <h1>Logging out...</h1>
    </>
  )
}

export default Logout;