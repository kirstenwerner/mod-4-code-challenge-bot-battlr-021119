import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {

  showBots = () => {
    return this.props.allBots.map(bot => {
      return <BotCard bot={bot}/>
    })
  }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.showBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
