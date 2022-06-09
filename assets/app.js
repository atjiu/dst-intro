function qs(s) {
    if (!s || s.length === 0) return null;

    s = s.substring(1);
    let result = {};
    let params = s.split('&');
    for (let i = 0; i < params.length; i++){
        let param = params[i].split('=');
        result[param[0]] = param[1];
    }

    return result;
}

function addOptions(ele, categories) {
    let selectele = document.getElementById(ele);
    for (let i = 0; i < categories.length; i++) {
        selectele.options.add(new Option(categories[i], categories[i]));
    }
}

function getAllCategory(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i].category);
    }
    return arr;
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
    console.log(newArr2);
    return newArr2;
}

function getAllChildren(data, category, search) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (category && category !== "全部") {
            if (data[i].category === category) {
                arr = arr.concat(data[i].child);
            }
        } else {
            arr = arr.concat(data[i].child);
        }
    }

    if (search) {
        return filterKeyWord(arr, search);
    }
    return arr;
}
