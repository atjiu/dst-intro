
import PubSub from 'pubsub-js'
import { marked } from 'marked'
import { useState } from 'react';

function getCategories(modData) {
    let categories = modData.map(function (item) {
        return item.category;
    });
    return Array.from(new Set(categories));
}

function filterKeyWord(newArr, keyword) {
    if (!keyword) return newArr;
    let newArr2 = [];
    for (let i = 0; i < newArr.length; i++) {
        let tmp = Object.assign({ ...newArr[i] });
        let name = tmp.name;
        let recipe = tmp.recipe;
        let description = tmp.description;
        let flag = false;
        if (name && name.indexOf(keyword) !== -1) {
            tmp.name = name.replaceAll(keyword, `<span class="red">${keyword}</span>`);
            flag = true;
        }
        if (recipe && recipe.indexOf(keyword) !== -1) {
            tmp.recipe = recipe.replaceAll(keyword, `<span class="red">${keyword}</span>`);
            flag = true;
        }
        if (description && description.indexOf(keyword) !== -1) {
            tmp.description = description.replaceAll(keyword, `<span class="red">${keyword}</span>`);
            flag = true;
        }
        if (flag) newArr2.push(tmp);
    }
    return newArr2;
}

function getItemsByCategory(modData) {
    let originData = modData.originData;
    let category = modData.category;
    let keyword = modData.keyword;
    if (!originData) return [];
    let newArr = [];
    if (category && category !== "") {
        for (let i = 0; i < originData.length; i++) {
            if (originData[i].category === category) {
                newArr = newArr.concat(originData[i].child);
            }
        }
    } else {
        for (let i = 0; i < originData.length; i++) {
            newArr = newArr.concat(originData[i].child);
        }
    }
    return filterKeyWord(newArr, keyword);
}

function Mod() {
    let [modData, setModData] = useState({})

    PubSub.subscribe('Mod Data', function (msg, data) {
        setModData({ originData: data.modData, info: data.info });

        let categories = getCategories(data.modData);
        PubSub.publish("Toolbar Data", { categories: categories });
    });
    PubSub.subscribe('Category Change', function (msg, data) {
        setModData(Object.assign({ ...modData, category: data.category }));
    });
    PubSub.subscribe('Search', function (msg, data) {
        setModData(Object.assign({ ...modData, keyword: data.keyword }));
    });

    return (
        <div className="container">
            {
                modData ? getItemsByCategory(modData).map(function (item) {
                    return (
                        <div className="card" key={`${item.name}${Date.now()}`}>
                            <div className="card-image-sm">
                                <img src={require(`../assets/${modData.info.folder}/images/${item.image}`)} alt="" />
                            </div>
                            <div className="card-body">
                                <div className="table-description">
                                    <div><b>名称</b></div>
                                    <div><span dangerouslySetInnerHTML={{ __html: item.name }}></span></div>
                                </div>
                                {
                                    item.code ?
                                        <div className="table-description">
                                            <div><b>代码</b></div>
                                            <div>{item.code}</div>
                                        </div> : null
                                }
                                {
                                    item.recipe ?
                                        <div className="table-description">
                                            <div><b>配方</b></div>
                                            <div><span dangerouslySetInnerHTML={{ __html: item.recipe }}></span></div>
                                        </div> : null
                                }
                                {
                                    item.tech ?
                                        <div className="table-description">
                                            <div><b>科技</b></div>
                                            <div>{item.tech}</div>
                                        </div> : null
                                }

                                <div className="table-description">
                                    <div style={{ verticalAlign: "top" }}><b>描述</b></div>
                                    <div className="description" dangerouslySetInnerHTML={{ __html: marked.setOptions({ breaks: true }).parse(item.description) }}></div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null
            }
        </div>
    );
}

export default Mod;
