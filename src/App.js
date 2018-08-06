import React, { Component } from 'react';
import Header from "./components/Header/Header"
import Jumbotron from  "./components/Jumbotron/Jumbotron"
import Card from "./components/Cards/Card"
import './App.css';


class App extends Component {
  state = {
    score: 0,
    topscore: 0,
    characters: [
        {
          key:1,
          name: "adam-west",
          selected: false
        },
        {
          key:2,
          name: "bruce",
          selected: false
        },  
        {
          key:3,
          name: "chris",
          selected: false
        },
        {
          key:4,
          name: "James-william",
          selected: false
        },
        {
          key:5,
          name: "Louis",
          selected: false
        },
        {
          key:6,
          name: "meg-griffin",
          selected: false
        },
        {
          key:7,
          name: "mort-goldman",
          selected: false
        },
        {
          key:8,
          name: "peter",
          selected: false
        },
        {
          key:9,
          name: "Quagmire",
          selected: false
        },
        {
          key:10,
          name: "seth",
          selected: false
        },
        {
          key:11,
          name: "Stan-Smith",
          selected: false
        },
        {
          key:12,
          name: "stewie-griffin",
          selected: false
        }
      ]
    };

      counterCheck = (name,selectedState)=>{
        let CharArray = this.state.characters;
        CharArray.sort(function(a, b){return 0.5 - Math.random()});

        if (selectedState){
            CharArray.forEach(char => char.selected = false);
            this.setState({ characters: CharArray, 
                            score: 0,
                            topscore: (this.state.score > this.state.topscore) ? this.state.score : this.state.topscore,
                          })
        } else {
            CharArray.forEach((char) => {
                if (char.name === name && char.selected === false) {
                    char.selected = true;
                    this.setState({characters: CharArray, score: this.state.score + 1})
                }
            });
        }
    };

  render() {
    return (
      <div>
        <Header score={this.state.score}
                topscore={this.state.topscore}/>
        <Jumbotron />
        <div className="row">
  
          {this.state.characters.map((char) => <Card  
                                                  key={char.key} 
                                                  id ={char.key} 
                                                  character={char.name} 
                                                  selected={char.selected} 
                                                  counterCheck={this.counterCheck}
                                                />)}
        </div>
      </div>
    );
  }
}

export default App;
