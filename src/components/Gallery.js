import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const goodsList = [
    { id: 1, photo: 'https://www.freeiconspng.com/uploads/recipe-apple-pie-png-32.png', name: 'Apple Pie', price: 100 },
    { id: 2, photo: 'https://www.freeiconspng.com/uploads/very-fine-food-icon-png-9.png', name: 'Humburger', price: 150 },
    { id: 3, photo: 'https://www.freeiconspng.com/uploads/food-icon-2.png', name: 'Baked potato', price: 200 },
    { id: 4, photo: 'https://www.freeiconspng.com/uploads/mine-food-png-transparent-28.png', name: 'Nuggets', price: 120 },
    { id: 5, photo: 'https://www.freeiconspng.com/uploads/ice-cream-png-food-4.png', name: 'Ice Cream', price: 180 },
    { id: 6, photo: 'https://www.freeiconspng.com/uploads/food-pizza-slice-icon-4.png', name: 'Pizza', price: 250 },
  ];

  return (
    <div className="gallery">
      {goodsList.map((goods) => (
        <GoodsCard
          key={goods.id}
          photo={goods.photo}
          name={goods.name}
          price={goods.price}
        />
      ))}
    </div>
  );
};

export default Gallery;
