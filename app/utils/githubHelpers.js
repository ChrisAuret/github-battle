var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOU_CLIENT_SECRET";
var param = "?client_id=" + id + "&client_secret=" + sec;

// returns a promise
function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username )
}

var helpers = {
    
    getPlayersInfo: function(players){
        // takes an array of promises.
        return axios.all(players.map(function(username){
            return getUserInfo(username); // a promise
        })).then(function(info){
            return info.map(function (user){
                return user.data;
            })
        }).catch(function(err){
            console.warn('Error in getPlayersInfo', err);
        })
    }
};

module.exports = helpers;