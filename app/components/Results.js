var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../components/MainContainer');
var Loading = require("../components/Loading");

function StartOver(){
  return (
            <div className="col-sm-12" style={styles.space}>
              <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger"> Start over</button>
              </Link>
            </div>
  )
}

function Tie (props) {
  return (
    <MainContainer>
      <h1>It's a Tie!</h1>
      <StartOver />
    </MainContainer>
  )
}

function Results (props) {
  
  if(props.isLoading === true){
    return (
      <Loading text={"One moment"} speed={100}/>
    )
  }
  
  if(props.scores[0] === props.scores[1]){
    return (
      <MainContainer>
        <Tie scores={props.scores} playersInfo={props.playersInfo}/>
      </MainContainer>
    )
  }
  
  var winninIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winninIndex === 0 ? 1 : 0; 
  
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winninIndex]} info={props.playersInfo[winninIndex]}/>  
        </UserDetailsWrapper> 
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>  
        </UserDetailsWrapper>
      </div>
        <StartOver/>
    </MainContainer>
  )
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;