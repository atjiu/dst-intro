
import { useState } from "react";
import PubSub from 'pubsub-js'
import Toolbar from './Toolbar';

function Header() {
  let [toolbarStatus, setToolbarStatus] = useState(false);
  PubSub.subscribe('Header Data', function (msg, data) {
    setToolbarStatus(data.toolbarStatus)
  });
  return (
    <div className="header">
      <h2>饥荒模组介绍页</h2>
      <div style={{ display: toolbarStatus ? "block" : "none" }}>
        <Toolbar />
      </div>
    </div>
  );
}

export default Header;
