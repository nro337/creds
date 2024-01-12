import { useNavigate } from "react-router-dom";
import Pocketbase from 'pocketbase';
import { useEffect } from "react";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      const base_url = import.meta.env.VITE_BASE
      const pb = new Pocketbase(base_url);
      await pb.authStore.clear();
      return navigate('/login', {replace: true});
    }
  
    logout();
  }, [navigate])


  return (
    <>
      <h1>Logging out...</h1>
    </>
  )
}

export default Logout;