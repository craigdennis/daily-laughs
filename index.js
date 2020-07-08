let date = new Date(); //get current date
let month = date.getMonth();
let day = date.getDate();
let youtubeURL = 'https://www.youtube.com/embed/';

let videoFrame = document.getElementById('daily-video');
let playBtn = document.querySelector('.play-btn');
let overlay = document.querySelector('.overlay');


const videoLinks = [
    [
        'JAN'
    ],

    [
        'FEB'
    ],

    [
        'MAR'
    ],

    [
        'APR'
    ],

    [
        'MAY'
    ],

    [
        'JUNE'
    ],

    [
        'iaAVp54twDA', 'FclScfPoKes', 'wJv0BgBa0xs', 'tDolNU89SXI', 'nS_6c4PyJvg', 'goztAMInFZ8&t', 'PWbguNBOv3U',
        'kMiEGUWBn98', 'ux8GZAtCN-M'
    ]
    
];


videoFrame.setAttribute('src', youtubeURL + videoLinks[month][day - 1]);
playBtn.addEventListener("click", function() {
    overlay.classList.add('animate');
 
});

