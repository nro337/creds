import Pocketbase from 'pocketbase';

export async function getCreds() {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);

  if (pb.authStore.isValid) {
    return (await pb.collection('credentials').getList()).items;
  } else {
    console.log('Could not get creds')
    return [];
  }
}