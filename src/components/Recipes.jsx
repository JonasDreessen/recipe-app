import React , {Component} from "react"

class Recipes extends Component {

    constructor(){
        super()
        this.state = {
            recipes: []
        }
    }

    componentWillMount(){
        fetch("https://www.food2fork.com/api/search?key=8905aac4ee88c0d1e32b41c715c8f9ed")
        .then(response => response.json())
        .then(response => 
            this.setState({
                recipes: response.recipes[0]
            })
            )
         
    }

    render(){
        return(
            <h1>{this.state.recipes.title}</h1>
        )
    }
        
    
}

export default Recipes