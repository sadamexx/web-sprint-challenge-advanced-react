import React from 'react';

export const Card = ({plant, addToCart }) => {
    return(
        <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p><span>💦</span> {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
    )
}