import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CarInfo, fetchCarList } from './Cars';

export default function CarList() {
  const [cars, setCars] = useState<CarInfo[]>([]);

  useEffect(() => {
    fetchCarList()
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching car list:', error));
  }, []);

  return (
    <div>
      <h2>Car List</h2>
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


