import { useRouter } from 'next/navigation';

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include', // Ensure cookies are sent with the request
    });

    // Redirect to login or home page
    router.push('/');
  };

  return logout;
}
