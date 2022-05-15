
import PubSub from 'pubsub-js'
import { useEffect, useState } from 'react';

function Toolbar() {

  let [toolbarData, setToolbarData] = useState({logStatus: false})

  PubSub.subscribe('Toolbar Data', function (msg, data) {
    setToolbarData({ categories: data.categories })
  });

  useEffect(function () {
  })

  return (
    <div className="toolbar">
      <div className="back clickable" onClick={() => {
        PubSub.publish('App Data', { modStatus: toolbarData.logStatus, modsStatus: !toolbarData.logStatus, logStatus: false });
        if (!toolbarData.logStatus) {
          PubSub.publish('Header Data', { toolbarStatus: false });
        }
        setToolbarData({ ...toolbarData, logStatus: false });
      }}>&lt;</div>
      <select style={{height: "2rem"}} onChange={e => {
        PubSub.publish('Category Change', { category: e.target.value });
      }}>
        <option key="全部" value="">全部</option>
        {
          toolbarData.categories ? toolbarData.categories.map(function (category) {
            return (<option key={category} value={ category }>{ category }</option>)
          }): null
        }
      </select>
      <input style={{height: "2rem"}} type="search" className="" onKeyDown={e => {
        if (e.keyCode === 13) {
          PubSub.publish('Search', { keyword: e.target.value });
        }
      }} defaultValue="" placeholder="搜点啥~" />
      <button onClick={() => {
        setToolbarData({...toolbarData, logStatus: true})
        PubSub.publish('App Data', { modStatus: false, modsStatus: false, logStatus: true });
      }}>更新日志</button>
    </div>
  );
}

export default Toolbar;
