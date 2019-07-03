import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

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

  deleteBotFromArmy = (array, value) => {
    return array.filter(function(ele) {
      return ele != value
    })
  }

  handleClick = (bot) => {
    if (!this.state.enlistedBots.includes(bot)) {
      this.setState({
        enlistedBots: [...this.state.enlistedBots,bot]
      })
    }
  }

  handleClickArmy = (bot) => {
    const army = this.deleteBotFromArmy(this.state.enlistedBots, bot)
    this.setState({
      enlistedBots: army
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy enlistedBots={this.state.enlistedBots} handleClick={this.handleClickArmy}/>
        <BotCollection allBots={this.state.allBots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
