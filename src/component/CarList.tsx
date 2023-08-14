import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCarList } from './Cars';

interface Car {
  id: number;
  name: string;
}

interface CarListProps {
  user: string;
}

export default function CarList({ user }: CarListProps) {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCarList()
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching car list:', error));
  }, []);

  return (
    <div>
      <h2>Car List for {user}</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`}>{car.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

