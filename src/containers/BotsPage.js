import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.enlistBot = this.enlistBot.bind(this);

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

  enlistBot = (bot) => {
    if (!this.state.enlistedBots.includes(bot)) {
      this.setState({
        enlistedBots: [...this.state.enlistedBots,bot]
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy enlistedBots={this.state.enlistedBots}/>
        <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
