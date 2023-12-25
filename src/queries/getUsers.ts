import Pocketbase from 'pocketbase';


export async function getUsers() {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);

  if (pb.authStore.isValid) {
    console.log('User is logged in');
    console.log(pb.authStore.model);
    return (await pb.collection('users').getList()).items;
  } else {
    console.log('User is not logged in');
    return [];
  }
}