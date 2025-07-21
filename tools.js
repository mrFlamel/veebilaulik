function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling); }

function changeValueByClassName(className, property, newValue){
    const elements = document.getElementsByClassName(className)
    for (let i = 0; i < elements.length; i++) {
        elements[i][property] = newValue;
    }
}

async function getSongIndex(){
    fetch("index.csv")
        const response = await fetch("index.csv");
        if (!response.ok) {
            throw new Error("Sõnade nimekirja hankimine ebaõnnestus");
        }

        const text = await response.text();
        const data = Papa.parse(text);
        const songIndex = {};

        for (let i = 1; i < data.data.length; i++) {
            if (data.data[i].length === 1) {
                data.data.splice(i + 1, 1);
                continue;
            }

            const key = data.data[i][8];
            songIndex[key] = {};

            for (let j = 0; j < data.data[0].length; j++) {
                songIndex[key][data.data[0][j]] = data.data[i][j];
            }
        }
        return songIndex;
}

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}