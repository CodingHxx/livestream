    "use client"
    import { useState } from 'react';
    import { useRouter } from 'next/navigation';

    export default function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const router = useRouter();

      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          router.push('/protected'); // Redirect to a protected page
        } else {
          alert('Login failed');
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      );
    }
