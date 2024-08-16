// utils/api.ts
export async function createPost(title: string, content: string): Promise<{ id: number; title: string; content: string; createdAt: string }> {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  }
  