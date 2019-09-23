import React, {Component} from "react"
import ChoosingOption from "./ChoosingOptions"

class ChoosingOptionsLogic extends Component {

    constructor(){
        super()
        this.state = {
            data: [],
            CharacterIsSelected: false,
            CharacterName: "", 
            CharacterHeight: "", 
            CharacterMass: "", 
            CharacterHairColor: "", 
            CharacterSkinColor: "",
            CharacterBirthYear: "",
            CharacterEyeColor: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
        event.preventDefault();
        const CharacterDataArray = this.props.CharacterData.results
        const matchingChar = CharacterDataArray.find(character => character.name === event.target.value)

        if (matchingChar) {
            this.setState({
                CharacterIsSelected: true,
                CharacterName: event.target.value,
                CharacterHeight: matchingChar.height,
                CharacterMass: matchingChar.mass,
                CharacterHairColor: matchingChar.hair_color,
                CharacterSkinColor: matchingChar.skin_color,
                CharacterBirthYear: matchingChar.birth_year,
                CharacterEyeColor: matchingChar.eye_color
            })
        }   
    }

    render(){
        return (
            <div>
                <ChoosingOption 
                    onClick={this.handleClick} 
                    optionsData={this.props.CharacterData.results} 
                    isLoading={this.props.isLoading}
                    CharacterIsSelected={this.state.CharacterIsSelected}
                    CharacterName={this.state.CharacterName}
                    CharacterHeight={this.state.CharacterHeight}
                    CharacterMass={this.state.CharacterMass}
                    CharacterHairColor={this.state.CharacterHairColor}
                    CharacterSkinColor={this.state.CharacterSkinColor}
                    CharacterBirthYear={this.state.CharacterBirthYear}
                    CharacterEyeColor={this.state.CharacterEyeColor}
                />
                
            </div>
        )
    }

}

export default ChoosingOptionsLogic