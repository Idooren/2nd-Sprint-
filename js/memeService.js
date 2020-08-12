'use strict'
const CURRMEME_KEY = 'currMeme';
let gKeywords = {};
let gNextId = 101;
let gImgs = createImages();

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
    return [createImage('images/2.jpg'), createImage('images/003.jpg'),
    createImage('images/5.jpg'), createImage('images/006.jpg'),
    createImage('images/8.jpg'), createImage('images/9.jpg'),
    createImage('images/img11.jpg'), createImage('images/leo.jpg'),
    createImage('images/12.jpg'), createImage('images/19.jpg'),
    createImage('images/Ancient-Aliens.jpg'), createImage('images/drevil.jpg'),
    createImage('images/004.jpg'), createImage('images/005.jpg'),
    createImage('images/img2.jpg'), createImage('images/img4.jpg'),
    createImage('images/p01h89x5.jpg'), createImage('images/4178620_orig.jpg'),
    createImage('images/img5.jpg'), createImage('images/img6.jpg'),
    createImage('images/meme1.jpg'), createImage('images/One-Does-Not-Simply.jpg'),
    createImage('images/putin.jpg'), createImage('images/X-Everywhere.jpg'),
    createImage('images/maxresdefault.jpg'), createImage('images/kick.jpg'),
    createImage('images/Oprah-You-Get-A.jpg'), createImage('images/patrick.jpg'),
    ]
}

function createImage(url) {
    return {
        id: gNextId++,
        url,
        keywords: ['a', 'b']
    }
}

function findURLById(idx){
   let img =  gImgs.filter((img) => {
        return img.id === idx;
    })
    return img[0].url;
}


function selectImgById(idx){
    gMeme.selectedImgId = idx;
    let url = findURLById(idx);
    gMeme.selectedImgUrl = url;
    saveMemeToStorage();

}

function getCurrMemeUrl(){
    let gMeme = loadMemeFromStorage();
    return gMeme.selectedImgUrl;
}


