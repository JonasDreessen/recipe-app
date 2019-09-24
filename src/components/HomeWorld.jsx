import React, {useState, useEffect} from "react"


const HomeWorld = (props) => {
    const [planetData, setPlanetData] = useState([]);

    useEffect(() => {
        if(props.Selected === true){
            if(props.Planet !== planetData){
            setPlanetData(props.Planet)
            }
        }
    },[props.Planet, planetData, props.Selected])

    return(
        <div className="planet-display">
            <p>Planet: {planetData.name}</p>
            <p>Population: {planetData.population}</p>
            <p>Terrain: {planetData.terrain}</p>
            <p>Climate: {planetData.climate}</p>
        </div>
    )
}

export default HomeWorld

