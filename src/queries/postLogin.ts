import Pocketbase from 'pocketbase';
// import { redirect } from 'react-router-dom';


export async function postLogin({username, password}: {username: string, password: string}) {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);

  const res = await pb.collection('users').authWithPassword(username, password);

  if (res && pb.authStore.isValid) {
    console.log('User is logged in');
    console.log(pb.authStore.model);
    return pb.authStore.model;
  } else {
    console.log('User is not logged in');
    return null;
  }

}