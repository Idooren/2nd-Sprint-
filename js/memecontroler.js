'use strict'

function init(){
    renderImgGallery();
}


function renderImgGallery(){
    let elImgContainer = document.querySelector('.img-gallery-container');
    let strHTMLS = gImgs.map((img) => {
        return `<a href="editor.html"><img onclick="onEditMeme(this)" data-id="${img.id}" src="${img.url}" alt="meme-bg"></a>`
    })
    strHTMLS = strHTMLS.join('');
    elImgContainer.innerHTML = strHTMLS;
}

function onEditMeme(elImg){
    let elImgIdx = elImg.dataset.id;
    elImgIdx = +elImgIdx;
    selectImgById(elImgIdx);
}

function initMemeEditor(){
    let url = getCurrMemeUrl();
    createImgElement(url);
    restoreCurrMeme();
}
