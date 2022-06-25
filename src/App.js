import SearchPokemon from './components/SearchPokemon';
import { useState, useEffect } from "react"

function App() {

  const [isDC, setIsDC] = useState(false);
  //  Error Handling (i think it's the bad way to do it)
  const connectionChecking = () => {
    const condition = navigator.onLine ? "online" : "offline";
    if (condition === "online") {
      setInterval(() => {
        fetch("//google.com", {
          mode: "no-cors",
        }).then(() => setIsDC(false)).catch(() => setIsDC(true));
      }, 5000);
      return;
    }
    return setIsDC(false);
  }

  useEffect(() => {
    connectionChecking();
    window.addEventListener('online', connectionChecking());
    window.addEventListener('offline', connectionChecking());
  }, []);

  return isDC ? <h1 style={{"textAlign" : "center"}}>Connection ERROR -_-</h1> : <SearchPokemon/>
}

export default App;
