import {useState, useEffect} from 'react';
import config from './config';


function App() {

  const [twentyCats, setTwentyCats] = useState([])

  useEffect(() => {
    loadTwentyCats()
  }, [])

  const loadTwentyCats = () => {
    fetch("https://api.thecatapi.com/v1/images/search?api_key=live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3&limit=20&order=DESC", {
        method: 'GET',
        header: {"x-api-key": "live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3"}
        })
    .then(res => res.json())
    .then((data) => {
      const modifiedData = data.map((cat) => {
        cat.votes = 0
        return cat;
      })
      setTwentyCats(modifiedData)
      console.log(modifiedData)
    })
    .catch(err => console.log('Error', err));
  }

  return (
    <div className="App">
      <CatGrid twentyCats={twentyCats}/>
    </div>
  );
}

export default App;