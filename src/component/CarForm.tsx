import React, { useState } from 'react';
import { CarInfo } from './Cars';

interface CarFormProps {
  onSave: (car: CarInfo) => void;
}

export default function CarForm({ onSave }: CarFormProps) {
  const [car, setCar] = useState<CarInfo>({
    id: 0,
    name: '',
    make: '',
    model: '',
    year: 0,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(car);
    setCar({ id: 0, name: '', make: '', model: '', year: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add Car</button>
    </form>
  );
}


