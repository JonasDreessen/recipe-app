import React from "react"
import LightSaberPicture from "../images/lightsaber.png"

function ChoosingOption(props) {  
    
            return (
                <div className="options">
                    <form action="">
                        <select name="characternames" onChange={props.onClick}>
                        <option>--- Choose Your Character ---</option>
                        
                        {!props.isLoading && props.optionsData.map(everyData => 
                                <option 
                                charactername={everyData.name} 
                                charactermass={everyData.mass}
                                key={everyData.name}
                                >
                                    {everyData.name}
                                </option>
                                )}
                        </select>
                        <img src={LightSaberPicture} alt="cannot load" className="lightsaber-picture" onChange={props.onClick}/>
                    </form>
                        <div className="options-display">
                            <h1>{props.isLoading ? null : props.charactername }</h1>
                            <p>{props.CharacterIsSelected ? "Height: " + props.CharacterHeight : null}</p>
                            <p> {props.CharacterIsSelected ? "Weight: " + props.charactermass : null}</p>
                            <p>{props.CharacterIsSelected ? "Hair Color: " + props.CharacterHairColor : null}</p>
                            <p>{props.CharacterIsSelected ? "Skin Color: " + props.CharacterSkinColor : null}</p>
                            <p>{props.CharacterIsSelected ? "Birth Year: " + props.CharacterBirthYear : null}</p>
                            <p>{props.CharacterIsSelected ? "Eye Color: " + props.CharacterEyeColor : null}</p>
                        </div>
                 </div>
    )
}


export default ChoosingOption