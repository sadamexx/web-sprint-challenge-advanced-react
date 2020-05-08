import React, { Component } from "react";
import axios from "axios";
import {Search} from './Search';
import {PlantCard} from "./PlantCards"

export default class PlantList extends Component {
  constructor(){
    super();
    this.state = {
      plants: [],
      searchField: ''
    }
  }
// add state with a property called "plants" - initialize as an empty array
  componentDidMount(){
    axios
    .get("http://localhost:3333/plants")
    .then(response => {
      console.log(response)
      this.setState({
        plants: response.data.plantsData})
    })
    .catch(err => console.log(err));
  }

  changeHandler = (e) => {    
    console.log(e.target.value);
    this.setState({  searchField: e.target.value})
  };

  
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    const {plants, searchField} = this.state;
    const filteredPlants = plants.filter(plant => 
      plant.name.toLowerCase().includes(searchField.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchField.toLowerCase()) ||
      plant.difficulty.toLowerCase().includes(searchField.toLowerCase()) ||
      plant.light.toLowerCase().includes(searchField.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchField.toLowerCase())
    );

    return ( 
      
      <div>
        <Search 
        changeHandler={this.changeHandler}/>   

        <PlantCard 
        plants={filteredPlants} 
        addToCart={this.props.addToCart}/>
       </div>   
       
      
    );
  }
}
