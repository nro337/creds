import Pocketbase from 'pocketbase';

export async function getAvatar() {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);

  if (pb.authStore.isValid) {
    return (await pb.collection('users').getOne(pb.authStore.model?.id));
  } else {
    console.log('Could not get creds')
    return [];
  }
}