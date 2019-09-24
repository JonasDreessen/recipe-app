import React , {Component} from "react"
import Loading from "./StarWars"
import ChoosingOptionsLogic from "./ChoosingOptionsLogic"




class StarWarsLogic extends Component {

    constructor(){
        super()
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount(){
        // recipes API: "https://www.food2fork.com/api/search?key=8905aac4ee88c0d1e32b41c715c8f9ed"

            fetch("https://swapi.co/api/people")
            .then(response => response.json())
            .then(response => 
                this.setState({
                    loading: false, 
                    data: response
                })
                )
    }

    render(){
        return(
            <div>
                <Loading isLoading={this.state.loading} data={this.state.data} />
                <ChoosingOptionsLogic CharacterData={this.state.data} isLoading={this.state.loading} />
                
            </div>
        )
    }
        
    
}
export default StarWarsLogic