'use strict'

function filterGImgs(keyword) {
    keyword = keyword.toLowerCase();
    gFilteredImg = gImgs.filter(img => {
        var keywords = img.keywords
        return keywords.some(word => {
            return (word.includes(keyword))
        })
    })
    if (keyword === 'all') gFilteredImg = gImgs

    renderImgGallery()
}

function filterByDropdown(keyword) {
    filterGImgs(keyword);
}

function mapByKeywords() {
    var popularWords = {};
    gImgs.forEach(img => {
        img.keywords.forEach(keyword => {
            if (!popularWords[keyword]) popularWords[keyword] = 1;
            else popularWords[keyword]++;
        })
    })
    return popularWords
}

function sortPopularWords() {
    var mapByPopular = mapByKeywords();
    var sortedPopular = [];
    for (var apearance in mapByPopular) {
        sortedPopular.push([apearance, mapByPopular[apearance]]);
    }

    sortedPopular.sort(function (b, a) {
        return a[1] - b[1];
    });
    gPopularWords = sortedPopular;

}

