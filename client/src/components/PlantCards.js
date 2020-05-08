import React from 'react';
import {Card} from './Card';


export const PlantCard = ({plants, addToCart}) => {
    

    return(
        <main className="plant-list">
            {plants.map((plant, index) => (
            <Card key={index} plant={plant} addToCart={addToCart}/>
                ))}
        </main> 
    )
};


