import { marked } from 'marked'
import { useState } from 'react';
import PubSub from 'pubsub-js'

function Log() {
    let [logs, setLogs] = useState([]);
    PubSub.subscribe('Log Data', function (msg, data) {
        setLogs(data.logs);
    });

    return (
        <div className="container">
            {
                logs.map(function (item) {
                    return (
                        <div className="card" key={item.date}>
                            <div className="card-body mods">
                                {
                                    item.title ? <p style={{fontSize: "0.9rem"}}><b>{item.title}</b></p> : null
                                }
                                {
                                    item.version ? <p style={{fontSize: "0.75rem"}}><b>版本</b>：{item.version}</p> : null
                                }
                                {
                                    item.date ? <p style={{fontSize: "0.75rem"}}><b>日期</b>：{item.date}</p> : null
                                }
                                <div style={{fontSize: "0.75rem"}} dangerouslySetInnerHTML={{ __html: marked.setOptions({ breaks: true }).parse(item.description) }}></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Log;
