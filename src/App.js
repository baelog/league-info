// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const PRIVATE_RIOT_KEY = "<api_key>"

let users = [
  "Baelog",
  "meditation lover",
  "MoukiOR", 
  "ArmIess kid", 
  "EyZedix", 
  "AMADEVS",
  "Soeur de Baelog",
  "Shen Sano",
  "ayledann"
]


function userCard(user) {
  axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + user + "?api_key=" + PRIVATE_RIOT_KEY).then((res) =>{
    // console.log(res.data.id)
    if (!res.data.id)
      return ({})
    axios.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + res.data.id + "?api_key=" + PRIVATE_RIOT_KEY).then((resbis) =>{
      console.log(resbis.data)
      if (resbis.data.length)
        return (resbis.data[0].leaguePoints)
      console.log()
      return (<li key={user}> <h2>{user}</h2><p>{resbis.data[0].leaguePoints}</p></li>)
    }).catch((err) => {
      console.error("fail to load user information", err)
    })
  }).catch((errbis) => {
    console.error("fail to load user", errbis)
  })
  return ({})
}

function App() {
  let info = []
  for (let i = 0; i < users.length; ++i) {
    // console.log(i)
    // let res = userCard(users[i])
    // if (res)
    //   info.push(res)
    // new Promise(r => setTimeout(r, 2000));
  }
  let listItems = users.map((number) =>
  <li key={number}>
    {number}
  </li>)
  console.log(info)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {listItems}
        </ul>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
