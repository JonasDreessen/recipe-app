import React from "react"


const HomeWorld = (props) => {

    if(props.Selected){
        return(

            <div className="planet-display"> 
                <p>Planet: {props.Planet.name}</p>
                <p>Population: {props.Planet.population}</p>
                <p>Terrain: {props.Planet.terrain}</p>
                <p>Climate: {props.Planet.climate}</p>
            </div>
        )
        
    }
    return HomeWorld
}

export default HomeWorld

