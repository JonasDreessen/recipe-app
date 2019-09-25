import React from "react"
import LightSaberPicture from "../images/lightsaber.png"
import HomeWorld from "./HomeWorld.jsx"

function ChoosingOption(props) {  
    
            return (
                <div>
                        <div>
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
                                    <img src={LightSaberPicture} alt="cannot load"
                                    className="lightsaber-picture" 
                                    onChange={props.onClick}
                                />
                            </form>
                        </div>
                                <div className="options-display">
                                    <h2>{props.isLoading ? null : props.charactername }</h2>
                                    <p>{props.CharacterIsSelected ? "Height: " + props.CharacterHeight : null}</p>
                                    <p> {props.CharacterIsSelected ? "Weight: " + props.charactermass : null}</p>
                                    <p>{props.CharacterIsSelected ? "Hair Color: " + props.CharacterHairColor : null}</p>
                                    <p>{props.CharacterIsSelected ? "Skin Color: " + props.CharacterSkinColor : null}</p>
                                    <p>{props.CharacterIsSelected ? "Birth Year: " + props.CharacterBirthYear : null}</p>
                                    <p>{props.CharacterIsSelected ? "Eye Color: " + props.CharacterEyeColor : null}</p>
                                    <HomeWorld />

                                </div>
                 </div>
    )
}


export default ChoosingOption