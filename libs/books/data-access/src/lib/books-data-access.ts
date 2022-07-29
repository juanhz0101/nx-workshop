export interface IBook {
  id: number,
  title: string,
  author: string,
  rating: number,
  price: number
}


export async function getBooks(): Promise<IBook[]> {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data.json();
}