import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CarInfo, fetchCarDetails } from './Cars'; 

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarInfo | null>(null);

  useEffect(() => {
    if(id != null) {
        fetchCarDetails(parseInt(id))
        .then(data => setCar(data))
        .catch(error => console.error('Error fetching car details:', error));
    }
  }, [id]);

  if (!car) {
    return <div>Load Load Load...</div>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p>Name: {car.name}</p>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
    </div>
  );
}


