import mods from "../assets/mods.json";
import PubSub from 'pubsub-js'

function Mods({data}) {
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
                            <div className="card-body">
                                <p>名称: {mod.name}</p>
                                <p>作者: {mod.author}</p>
                                <p>简介: {mod.intro}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Mods;
