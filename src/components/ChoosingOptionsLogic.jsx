import React, {Component} from "react"
import ChoosingOption from "./ChoosingOptions"
import { TweenLite } from "gsap"
import HomeWorld from "./HomeWorld"

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
            CharacterEyeColor: "",
            CharacterPlanet:[],
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
                CharacterEyeColor: matchingChar.eye_color,
                CharacterPlanet: matchingChar.homeworld
            })
            const spinningElement = document.querySelector(".lightsaber-picture")
            TweenLite.fromTo(spinningElement, 0.7,{rotation: 0},{rotation: 360, transformOrigin: "center"}, {rotation: 0});
            
            fetch(matchingChar.homeworld)
            .then(response => response.json())
            .then(response => 
                this.setState({
                    CharacterPlanet: response
                }))
        }
        console.log(this.state.CharacterPlanet)
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
                <HomeWorld
                    Planet={this.state.CharacterPlanet}
                    Selected={this.state.CharacterIsSelected}
                />
                
            </div>
        )
    }

}

export default ChoosingOptionsLogic