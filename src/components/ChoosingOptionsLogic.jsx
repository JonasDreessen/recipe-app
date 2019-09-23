import React, {Component} from "react"
import ChoosingOption from "./ChoosingOptions"
import { TweenLite } from "gsap"

class ChoosingOptionsLogic extends Component {

    constructor(){
        super()
        this.state = {
            data: [],
            CharacterIsSelected: false,
            charactername: "", 
            CharacterHeight: "", 
            charactermass: "", 
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
                charactername: event.target.value,
                CharacterHeight: matchingChar.height,
                charactermass: matchingChar.mass,
                CharacterHairColor: matchingChar.hair_color,
                CharacterSkinColor: matchingChar.skin_color,
                CharacterBirthYear: matchingChar.birth_year,
                CharacterEyeColor: matchingChar.eye_color
            })
            const spinningElement = document.querySelector(".lightsaber-picture")
            TweenLite.to(spinningElement, 0.7, {rotation:360, transformOrigin: "center"});
            console.log("hi this is a test")
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
                    charactername={this.state.charactername}
                    CharacterHeight={this.state.CharacterHeight}
                    charactermass={this.state.charactermass}
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