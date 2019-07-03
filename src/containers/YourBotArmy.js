import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  showBotArmy = () => {
    if (this.props.enlistedBots.length !== 0) {
      return this.props.enlistedBots.map(bot => {
        return <BotCard bot={bot} key={bot.id} handleClick={this.handleClick}/>
      })
    } else {
      return null
    }
  }

  handleClick = (bot) => {
    debugger
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.showBotArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
