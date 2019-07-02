import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  // https://bot-battler-api.herokuapp.com/api/v1/bots
  constructor(props) {
    super(props);

    this.state = {
      allBots: [],
      enlistedBots: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(allBots => this.setState({allBots}))
  }

  render() {
    return (
      <div>
        <BotCollection allBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
