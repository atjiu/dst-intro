
import PubSub from 'pubsub-js'
import { useEffect, useState } from 'react';

function Toolbar() {

  let [toolbarData, setToolbarData] = useState({})

  PubSub.subscribe('Toolbar Data', function (msg, data) {
    setToolbarData({ categories: data.categories })
  });

  useEffect(function () {
  })

  return (
    <div className="toolbar">
      <div className="back clickable" onClick={() => {
        PubSub.publish('App Data', { modStatus: false, modsStatus: true });
        PubSub.publish('Header Data', { toolbarStatus: false });
      }}>&lt;</div>
      <select onChange={e => {
        PubSub.publish('Category Change', { category: e.target.value });
      }}>
        <option key="全部" value="">全部</option>
        {
          toolbarData.categories ? toolbarData.categories.map(function (category) {
            return (<option key={category} value={ category }>{ category }</option>)
          }): null
        }
      </select>
      <input type="search" className="" onKeyDown={e => {
        if (e.keyCode === 13) {
          PubSub.publish('Search', { keyword: e.target.value });
        }
      }} defaultValue="" placeholder="搜点啥~" />
    </div>
  );
}

export default Toolbar;
