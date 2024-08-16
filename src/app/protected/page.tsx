"use client"
import LogoutButton from '@/components/ui/Logout';
import { useEffect, useState } from 'react';

export default function ProtectedPage() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/protected');
      if (response.ok) {
        const result = await response.json();
        setData(result.message);
      } else {
        setData('Failed to fetch data');
      }     
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>{data}</p>
      <LogoutButton />
    </div>
  );
}
