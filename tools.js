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
        const songIndex = [];

        for (let i = 1; i < data.data.length; i++) {
            if (data.data[i].length === 1) {
                data.data.splice(i + 1, 1);
                continue;
            }

            var laul = {};
            for (let j = 0; j < data.data[0].length; j++) {
                laul[data.data[0][j]] = data.data[i][j]
            }
            songIndex.push(laul);
        }
        return songIndex;
}

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function findNextMultiplier(start, search){
    return Math.ceil(start / search) * search;
}

function looLauluInfo(selgitus, andmed, element="i", id="puudub", siht="lauluInfo"){
    if (andmed == ""){
        return
    }
    var info = document.createElement(element);
    info.innerHTML = selgitus + andmed + "<br>";
    if (id != "puudub"){
        info.id = id
    }
    document.getElementById(siht).appendChild(info);
}


function kontrEnharmooniat(helistik, meeleolu, list, newOrder){
    const major = ['A-duur', 'Bb-duur', "B-duur/Cb-duur", "C-duur", "C#-duur/Db-duur", "D-duur", "Eb-duur", "E-duur", "F-duur", "F#-duur/Gb-duur", "G-duur", "Ab-duur"]
    const minor = ['A-moll', 'A#-moll/Bb-moll', 'B-moll', 'C-moll', 'C#-moll', 'D-moll', 'D#-moll/Eb-moll', 'E-moll', 'F-moll', 'F#-moll', 'G-moll', 'G#-moll/Ab-moll']

    if (meeleolu.endsWith("duur")){
        if (helistik==2 || helistik==4 || helistik==9){
            list.push(newOrder.indexOf(major[helistik]))
        }
    } else {
        if (helistik==1 || helistik==6 || helistik==11){
            list.push(newOrder.indexOf(minor[helistik]))
        }
    }
    return list;

}

function votmemark(helistik, list){
    const majorSharp = ['A-duur', "B-duur/Cb-duur", "C-duur", "C#-duur/Db-duur", "D-duur", "E-duur", "F#-duur/Gb-duur", "G-duur"]
    const minorSharp = ['A#-moll/Bb-moll', 'C#-moll', 'D#-moll/Eb-moll', 'E-moll', 'F#-moll', 'G#-moll/Ab-moll']

    if (list[0].endsWith("duur")){
        if (majorSharp.includes(list[helistik])){
            return "#"
        } else {
            return "b"
        }
    } else {
        if (minorSharp.includes(list[helistik])){
            return "b"
        } else {
            return "#"
        }
    }

}

function getInputsByValue(value)
{
    var allInputs = document.getElementsByTagName("option");
    var results = [];
    for(var x=0;x<allInputs.length;x++)
        if(allInputs[x].value == value)
            results.push(allInputs[x]);
    return results;
}

function reverseParts(str) {
  const parts = str.split('/');
  if (parts.length !== 2) {
    throw new Error("Input must contain exactly one '/' character.");
  }
  return `${parts[1]}/${parts[0]}`;
}