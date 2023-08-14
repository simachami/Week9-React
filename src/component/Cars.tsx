export interface CarInfo {
    id: number;
    name: string;
    make: string;
    model: string;
    year: number;
  }
  
  export async function fetchCarList(): Promise<CarInfo[]> {
    try {
      const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars');
      if (!response.ok) {
        throw new Error('Bad Response');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching car list:', error);
      return [];
    }
  }
  
  export async function fetchCarDetails(id: number): Promise<CarInfo | null> {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`);
      if (!response.ok) {
        throw new Error('Bad Response');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching car details:', error);
      return null;
    }
  }


export function saveCollection(collection: CarInfo[]): void {
  localStorage.setItem('carCollection', JSON.stringify(collection));
}

export function loadCollection(): CarInfo[] {
  const storedCollection = localStorage.getItem('carCollection');
  return storedCollection ? JSON.parse(storedCollection) : [];
}

  