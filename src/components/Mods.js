import mods from "../assets/mods.json";
import PubSub from 'pubsub-js'

function Mods() {
    return (
        <div className="container">
            {
                mods.map(function (mod) {
                    return (
                        <div className="card clickable" key={mod.name} onClick={() => {
                            PubSub.publish('App Data', { modStatus: true, modsStatus: false});
                            PubSub.publish('Header Data', { toolbarStatus: true });
                            PubSub.publish('Mod Data', {info: mod, modData: require(`../assets/${mod.folder}/data.js`).default});
                        }}>
                            <div className="card-image">
                                <img src={require(`../assets/${mod.folder}/images/${mod.logo}`)} alt="" />
                            </div>
                            <div className="card-body mods">
                                <p style={{fontSize: "0.75rem"}}><b>名称</b>：{mod.name}</p>
                                <p style={{fontSize: "0.75rem"}}><b>作者</b>：{mod.author}</p>
                                <p style={{fontSize: "0.75rem"}} className="mod-intro"><b>简介</b>：{mod.intro}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Mods;
