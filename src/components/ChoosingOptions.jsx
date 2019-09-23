import React from "react"

function ChoosingOption(props) {  
    
            return (
                <div className="options">
                    <form action="">
                        <select name="CharacterNames" onChange={props.onClick}>
                        <option>--- Choose Your Character ---</option>
                        {!props.isLoading && props.optionsData.map(everyData => 
                                <option 
                                CharacterName={everyData.name} 
                                CharacterMass={everyData.mass}
                                key={everyData.name}
                                >
                                    {everyData.name}
                                </option>
                                )}
                        </select>
                    </form>
                        <div className="options-display">
                            <h1>{props.isLoading ? null : props.CharacterName }</h1>
                            <p>{props.CharacterIsSelected ? "Height: " + props.CharacterHeight : null}</p>
                            <p> {props.CharacterIsSelected ? "Weight: " + props.CharacterMass : null}</p>
                            <p>{props.CharacterIsSelected ? "Hair Color: " + props.CharacterHairColor : null}</p>
                            <p>{props.CharacterIsSelected ? "Skin Color: " + props.CharacterSkinColor : null}</p>
                            <p>{props.CharacterIsSelected ? "Birth Year: " + props.CharacterBirthYear : null}</p>
                            <p>{props.CharacterIsSelected ? "Eye Color: " + props.CharacterEyeColor : null}</p>
                        </div>
                 </div>
    )
}


export default ChoosingOption