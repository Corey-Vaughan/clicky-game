import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import heros from "./heros.json";

class App extends Component {
  // Set state
  state = {
    guessArray: [],
    message: "Click a picture to start!",
    score: 0,
    highScore: 0
  };

  // Click event
  clickCard = card => {
    let guessArray = this.state.guessArray;
    let score = this.state.score;
    // If its a bad guess 
    if (guessArray[card.id]) {
      this.setState({
        guessArray: [],
        message: "Game Over, you already guess that one. Let's go again!",
        score: 0,
        highScore: Math.max(this.state.score, this.state.highScore),
      })
      // Else it must be a good guess
    } else {
      guessArray[card.id] = true;
      this.setState({
        guessArray: guessArray,
        message: "Great guess! +1 Point",
        score: ++score,
      })
    }
  };

  // Render Everything
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <Wrapper>
          {heros
            .sort((a, b) => 0.5 - Math.random())
            .map(randomCard => (
              <CharacterCard
                clickCard={this.clickCard}
                id={randomCard.id}
                key={randomCard.id}
                image={randomCard.image} />))}
        </Wrapper>
        <Footer />
      </div>
    );
  }

}

export default App;
