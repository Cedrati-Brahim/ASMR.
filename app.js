var keyLeft
var keyCenter
var keyRight
var playing = false;
var Sound_1 = new Audio("sound/Forest.mp3");
var Sound_2 = new Audio("sound/Creek.mp3");
var Sound_3 = new Audio("sound/Fireplace.mp3");
var Sound_4 = new Audio("sound/River.mp3");
var Sound_5 = new Audio("sound/Coast.mp3");
var Sound_6 = new Audio("sound/Boat_Paddling.mp3");
var natureSounds = [Sound_1, Sound_2, Sound_3,Sound_4, Sound_5, Sound_6];
var playedSound;
var loop = new SeamlessLoop();


/**
 * @brief KeyDown Handler
 *
 * @param et
 *
 * @return 
 */




window.onload = function() {
    document.getElementById("natureSound_1").focus();
    setUp();
    start();
};

function start() {


    loop.addUri("sound/Forest.mp3", 54000, "sound0");
    loop.addUri("sound/Creek.mp3", 30000, "sound1");
    loop.addUri("sound/Fireplace.mp3", 28000, "sound2");
    loop.addUri("sound/River.mp3", 32000, "sound3");
    loop.addUri("sound/Coast.mp3", 121000, "sound4");
    loop.addUri("sound/Boat_Paddling.mp3", 17000, "sound5");
}



function playSound(index) {

    var playPauseIcon = document.activeElement.childNodes;
    if (playing) {
        for (let i = 0; i < natureSounds.length; i++) {
            document.getElementById(i).style.backgroundImage = "url(icons/playIcon.png)";
        }
        playedSound.pause();
        loop.stop();
    } else {
        playedSound = natureSounds[index];
        playedSound.loop = true;
        // playedSound.play();
        loop.start("sound" + index);
        playPauseIcon[1].style.backgroundImage = "url(icons/pauseIcon.png)";

    }

    playing = !playing;

    if (playedSound != natureSounds[index]) {

        playedSound = natureSounds[index];
        playedSound.loop = true;
        // playedSound.play();
        loop.start("sound" + index);
        playPauseIcon[1].style.backgroundImage = "url(icons/pauseIcon.png)";
        playing = !playing;

    }

    handleSoftkeyValue();

}

function handleSoftkeyValue() {
    var playPauseIcon = document.activeElement.childNodes;
    var playIcon = "url(\"icons/playIcon.png\")";
    var pauseIcon = "url(\"icons/pauseIcon.png\")";


    if (playPauseIcon[1].style.backgroundImage == playIcon) {
        document.getElementById("softkey-center").innerHTML = "Play";
    }
    if (playPauseIcon[1].style.backgroundImage == pauseIcon) {
        document.getElementById("softkey-center").innerHTML = "Pause";
    }

}


function nav(move) {

    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.items');
    const targetElement = items[next];
    if (targetElement != null) {
        targetElement.focus();
    }
    handleSoftkeyValue();
}

function handleKeyDown(et) {


    switch (et.key) {
        case 'SoftLeft':
            break;

        case 'Enter':
            document.activeElement.click();
            break;

        case 'SoftRight':
            break;

        case 'ArrowUp':
            nav(-1);
            break;

        case 'ArrowDown':
            nav(1);
            break;

        case 'ArrowRight':
            nav(1);
            break;

        case 'ArrowLeft':
            nav(-1);
            break;

    }

}




function setUp() {
    document.getElementById("0").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("1").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("2").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("3").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("4").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("5").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("natureSound_1").focus();
    window.scrollTo(0, 0); 

}

document.addEventListener("keydown", handleKeyDown);

document.addEventListener("DOMContentLoaded", () => {
    // getKaiAd( config )
    getKaiAd({
        publisher: 'c0cc2f38-fd2f-4012-ad91-b1299e32c729',
        app: 'Nature_sounds',
        slot: 'Nature_sounds_Slot',
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display')
            ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
            ad.on('close', () => {
                document.getElementById("softKeysContainer").style.display = "block";
                document.getElementById("natureSound_1").focus();
            })
        }
    })



});

const interval = setInterval(() => {

    getKaiAd({
        publisher: 'c0cc2f38-fd2f-4012-ad91-b1299e32c729',
        app: 'Nature_sounds',
        slot: 'Nature_sounds_Slot',
        test: 1,
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display')
            ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
            ad.on('close', () => {
                document.getElementById("softKeysContainer").style.display = "block";
                document.getElementById("natureSound_1").focus();
            })
        }
    })

}, 120000);