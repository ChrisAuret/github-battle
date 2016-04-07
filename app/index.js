
var USER_DATA = {
    name: 'Chris Auret',
    username: 'ChrisAuret',
    image: 'https://avatars2.githubusercontent.com/u/8073931?v=3&amp;s=460'   
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
   render : function(){
       return <img src={this.props.imageUrl} style={{width:100, height:100}}/>
   } 
});

var ProfileLink = React.createClass({
   render : function(){
       return (
            <div>
                <a href={'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>  
        )
   } 
});

var ProfileName = React.createClass({
   render : function() {
     return (
        <div>{this.props.name}</div>
     )  
   } 
});

var Avatar = React.createClass({    
    render : function() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }    
});

ReactDOM.render(
    <Avatar user={USER_DATA}/>,
    document.getElementById('app')
)