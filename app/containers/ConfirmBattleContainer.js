var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
   
   contextTypes: {
       router: React.PropTypes.object.isRequired
   },
   
   getInitialState: function() {
     return {
         isloading : false,
         playersInfo: []
     }  
   },
   componentDidMount: function(){
      var query = this.props.location.query;
        
        // Fetch info from github then update state
   },
   render: function(){
       return (
         <ConfirmBattle 
            isloading={this.state.isloading} 
            playersInfo={this.state.playersInfo} />
       );
   }
    
});

module.exports = ConfirmBattleContainer;