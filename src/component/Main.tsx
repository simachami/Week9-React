//import React from 'react';

interface CarProps {
  name: string;
  make: string;
  model: string;
  year: number;
}

export default function Main(props: { car: CarProps }) {
  const { car } = props;

  return (
    <main>
      <h2>Car Details</h2>
      <div>
        <h3>{car.name}</h3>
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>
      </div>
    </main>
  );
}

