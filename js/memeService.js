'use strict'
const CURRMEME_KEY = 'currMeme';
let gNextId = 1;
let gImgs = createImages();
var gFilteredImg;
var gPopularWords;
let gMeme = {
    selectedImgId: 0,
    selectedImgUrl: '',
    selectedTxt: 0,
    txts: [
        {
            line: '',
            lineHeight: 80,
            lineX: 200,
            fontSize: 60,
            align: 'center',
            color: 'white',
            stroke: 'black',
            font: 'Impact'
        }
    ]
}

function createImages() {
    return [createImage('images/2.jpg','happy', 'movie', 'music' ),
    createImage('images/003.jpg', 'trump', 'politics', 'finger'),
    createImage('images/004.jpg',  'cute', 'baby', 'animal', 'dog'),
    createImage('images/005.jpg', 'cute', 'baby', 'animal', 'dog'),
    createImage('images/5.jpg', 'cute', 'baby', 'mad'),
    createImage('images/006.jpg', 'cute', 'animal', 'cat'),
    createImage('images/8.jpg', 'cute', 'evil', 'funny'),
    createImage('images/9.jpg','happy', 'movie', 'you'),
    createImage('images/12.jpg', 'happy', 'movie', 'hair'),
    createImage('images/19.jpg','man','hand','hair'),
    createImage('images/Ancient-Aliens.jpg','man','wierd','hair'),
    createImage('images/drevil.jpg','man','dorctor','movie'),
    createImage('images/img2.jpg','dance','kid', 'happy'),
    createImage('images/img4.jpg', 'trump', 'politics', 'finger'),
    createImage('images/img5.jpg', 'eye','kid', 'wired'),
    createImage('images/img6.jpg','dog','lazy','funny'),
    createImage('images/img11.jpg','obama', 'politics', 'usa'),
    createImage('images/leo.jpg','happy', 'movie', 'leonardo', 'drink'),
    createImage('images/meme1.jpg','matrix', 'man', 'movie'),
    createImage('images/One-Does-Not-Simply.jpg','hair','man'),
    createImage('images/putin.jpg','putin', 'politics', 'russia'),
    createImage('images/X-Everywhere.jpg','movie', 'toy','kid'),
    createImage('images/maxresdefault.jpg','movie','man','funny'),
    createImage('images/kick.jpg','woman','kick'),
    createImage('images/p01h89x5.jpg','movie', 'funny', 'man'),
    createImage('images/4178620_orig.jpg','woman','hair','happy'),
    createImage('images/Oprah-You-Get-A.jpg','happy', 'oprah','woman'),
    createImage('images/patrick.jpg','man','movie'),
    ]
}

function createImage(url, ...keywords) {
    
    return {
        id: gNextId++,
        url,
        keywords,
    }
}

function findURLById(idx) {
    let img = gImgs.filter((img) => {
        return img.id === idx;
    })
    return img[0].url;
}


function selectImgById(idx) {
    gMeme.selectedImgId = idx;
    let url = findURLById(idx);
    gMeme.selectedImgUrl = url;
    saveMemeToStorage();

}

function getCurrMemeUrl() {
    let gMeme = loadMemeFromStorage();
    return gMeme.selectedImgUrl;
}


function setMemeFontSize(size, idx) {
    gMeme.txts[idx].fontSize = size;
    saveMemeToStorage();
}

function setMemeLineHeight(y, idx) {
    gMeme.txts[idx].lineHeight = y;
    saveMemeToStorage()
}

function setMemeTxt(selectedTxt, Txt) {
    gMeme.selectedTxt = selectedTxt;
    gMeme.txts[selectedTxt].line = Txt;
    saveMemeToStorage();
}

function increaseMemeIdx() {
    if (gMeme.txts.length === 0) return;
    gMeme.selectedTxt++;
    saveMemeToStorage();
}

function addTxts(idx) {
    if (idx === 0) {
        var newTxt = {
            line: '',
            lineHeight: 80,
            lineX: 200,
            fontSize: 60,
            align: 'center',
            color: 'white',
            stroke: 'black',
            font: 'Impact'
        }
    }
    if (idx === 1) {
        newTxt = {
            line: '',
            lineHeight: 370,
            lineX: 200,
            fontSize: 60,
            align: 'center',
            color: 'white',
            stroke: 'black',
            font: 'Impact'
        }
    }
    if (idx > 1) {
        newTxt = {
            line: '',
            lineHeight: 210,
            lineX: 200,
            fontSize: 60,
            align: 'center',
            color: 'white',
            stroke: 'black',
            font: 'Impact'
        }
    }
    let txts = gMeme.txts;
    txts.push(newTxt);
    saveMemeToStorage();
}

function setMemeTxtsIdx(newIdx) {
    gMeme.selectedTxt = newIdx;
    saveMemeToStorage();
}

function setMemeTxtAlignment(idx, alignment) {
    gMeme.txts[idx].align = alignment;
    saveMemeToStorage();
}

function setMemeProperty(idx, property, value) {
    gMeme.txts[idx][property] = value;
    saveMemeToStorage();
}

function getCurrText(idx) {
    let gMeme = loadMemeFromStorage()
    return gMeme.txts[idx].line;
}

function removeLine(idx) {
    gMeme.txts.splice(idx, 1);
    if (idx > 0) {
        gMeme.selectedTxt = idx - 1;
    }
    else gMeme.selectedTxt = 0;
    saveMemeToStorage();
}

function findUnselectedTextsIdx(selectedTxtIdx) {
    let unselectedIdxs = []
    gMeme.txts.findIndex((line, idx) => {
        if (idx !== selectedTxtIdx) {
            unselectedIdxs.push(idx)
        };
    });
    return unselectedIdxs;
}

function findIdxs() {
    let idxs = []
    let length = gMeme.txts.length;
    for (let i = 0; i < length; i++) {
        idxs.push(i);
    }
    return idxs;
}

function getSelectedTxtLength() {
    let gMeme = loadMemeFromStorage()
    return gMeme.txts.length;
}

function getSelectedTxt() {
    let gMeme = loadMemeFromStorage();
    return gMeme.selectedTxt;
}

function setTxtsLineHeight(firstLine, secondLine) {
    gMeme.txts[0].lineHeight = secondLine;
    gMeme.txts[(gMeme.txts.length) - 1].lineHeight = firstLine;
    saveMemeToStorage();
}

function switchSelectedTxt(idx) {
    if (idx === 0) {
        gMeme.selectedTxt = (gMeme.txts.length) - 1;
    }
    else gMeme.selectedTxt = idx - 1;
    saveMemeToStorage();
}

function saveMemeToStorage() {
    saveToStorage(CURRMEME_KEY, gMeme);
}

function loadMemeFromStorage() {
    return loadFromStorage(CURRMEME_KEY);
}

