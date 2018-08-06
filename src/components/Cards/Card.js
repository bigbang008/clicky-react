import React from 'react';
import "./Card.css";

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            key: this.props.id,
            name: this.props.character,
            selected: this.props.selected
        };
    }
    componentDidMount(){
        console.log(this.props.id, this.props.character, this.props.selected, this.props.counterCheck);
    }

    render(){
        return(
            <div onClick={()=>this.props.counterCheck(this.props.character,this.props.selected)} className={"col-3 mt-3"}>
                <img className={"thumbnail"} src={require(`../../Photos/characters/${this.props.character}.png`)} alt={this.props.character}/>
            </div>
        )
    }

}

export default Card