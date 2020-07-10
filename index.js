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
        'kMiEGUWBn98', 'ux8GZAtCN-M', 'c7QYEedjb_o', 'Vn6MHmDo_Ck', 'VxyLwYB494c', '2O2bKu-3U3U', 't9E5NYKOBdk', 'pRyjfj0tRI4',
        '6aIdNexGjw0', 'FKcr2h7RR-g', 'th_nxlbXtTk', '7G_SurZXUpg', 'pVwXx3pZEcM', 'AVVY2uG7FXo', 'B1YyKbW7l2M', '5GAMcD9Lu-g',
        '-dulGdlC6hs', 'l-Shps6Aiqk', 'PRqB4eOshOY', '_CTDIWC0CIg', 'j3acaLsAHeQ', 'rmSknklwJT8', '9J-sTaesQ-Y', 'Un7xyJktiSc', 
        
    ],

    [
        'HnMSJVRgopc', 'VGgPKtLDPyQ', 'h4lyfbPj0YQ', '46hP3222TDA', '_T8zHsK6RS0', 'bAtsboZcD7o', 'UWLDQeVK16A', '6xrHnazjGDw',
        'eESrVGYlGLM', 'QA592yNiww4', 'f713tLbdlu4', 'eAj_xnG8k0Q', 'H4l1sO0Jq4o', 'UhxY6XledKE', 'inWrsx-Ei64', 'olbGYiU3ewM',
        'AJBdq4WQLDs', 'RgWNiNqL_O0', 'Q-C9mPu7r_4', '4nL8o2rmSJg', 'U6Zuh9q9INk', 'uw8dW9Hyno0', 'ikr-QGhndz4', 'kLUFit8815c',
        'WzcCfIqndWY', '0Ck3J9eICCI', 'Hx_4dcuD6pI', 'PFH1vLCiKcw', 'w1UJHvvA-hc', 'mU-8sCYSdtA', 'IDuoLSTGahw',
    ],

    [
        'SEPTEMBER'
    ],

    [
        'OCTOBER'
    ],

    [
        'NOVEMBER'

    ],

    [
        'DECEMBER'
    ]
    
];


videoFrame.setAttribute('src', youtubeURL + videoLinks[month][day - 1]);
playBtn.addEventListener("click", function() {
    overlay.classList.add('animate');
 
});

