import { useLogout } from '@/hooks/useLogout';
import { Button } from '@/components/ui/button';

export default function LogoutButton() {
  const logout = useLogout();

  return (
    <Button onClick={logout}>Logout</Button>
  );
}
