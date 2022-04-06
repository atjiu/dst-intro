// import ndnr from "../assets/ndnr/ndnr";
import Header from "./Header";
import Mods from "./Mods";
import Mod from "./Mod";
import Log from "./Log";
import { useState } from 'react';
import PubSub from 'pubsub-js'

function App() {
  let [modStatus, setModStatus] = useState(false)
  let [modsStatus, setModsStatus] = useState(true)
  let [logStatus, setLogStatus] = useState(false)

  PubSub.subscribe('App Data', function (msg, data) {
    setModStatus(data.modStatus);
    setModsStatus(data.modsStatus);
    setLogStatus(data.logStatus);
  });

  return (
    <div>
      <Header />
      <div style={{ display: modsStatus ? "block" : "none" }}>
        <Mods />
      </div>
      <div style={{ display: modStatus ? "block" : "none" }}>
        <Mod />
      </div >
      <div style={{ display: logStatus ? "block" : "none" }}>
        <Log />
      </div >
    </div >
  );
}

export default App;
