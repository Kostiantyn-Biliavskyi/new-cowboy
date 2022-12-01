var audio = new Audio(), audio1 = new Audio(), audio2 = new Audio(), audio3 = new Audio(), titleAudio = new Audio();
var distance = 0, hit, sum = 0, ipo, x;
var widthAdjustment, ter, stopsetTimeout;
var userWidthWindow, userHeightWindow, sizeWindow, userWidthWindowAmendment;
var userWidth = 0, ipo, routeStart = 70, routFinish = 300;
// ----------------------------------------------------------------
var cowboyFotoshopMas = ["cowboyFotoshopGo", "cowboyFotoshopGo1", "cowboyFotoshopGo"], y = 0, cowboyMassiv, distance1;
var stopShotCowboyFotoshop, stopCowboyTurn, goToggle, cowboyMassiv75, iterator = 0;
var fonSwitchMas = ["fonSwitch", "fonSwitch1", "fonSwitch"], i = -1, fonMassiv, stopStarLossUser, ii = 0;
userWidthWindow = window.innerWidth;
userHeightWindow = window.innerHeight;

function muzTitle() {
    titleAudio.src = 'css/css.music/vestern-gubnaya-garmoshka.mp3';
    titleAudio.loop = true;
    titleAudio.autoplay = true;
    titleAudio.volume = 0.70;
};

titleFoto.addEventListener("click", muzTitle);
title.addEventListener("click", startDuel);
duelRegulationsExit.addEventListener("click", back);
menuSmallButton2.addEventListener("click", mainMenu);
menuSmallButton2.addEventListener("click", zeroing);

if (userHeightWindow < 350) {
    button.style.top = 50 + '%';
}

function mainMenu() {

    fon.style.display = 'none';
    title.style.display = 'block';
    cowboy.style.display = 'none';
    audio.pause();
    audio1.pause();
    audio3.pause();
    return 0;
};

function startDuel(e) {
    if (e.target.id == 'titleButton1' || e.target.id == 'titleButton1Text') {
        title.style.display = 'none';
        background.style.display = "block";
        beginningOfTheGame();
    }
    if (e.target.id == 'titleButton2' || e.target.id == 'titleButton2Text') {
        title.style.display = 'none';
        duelRegulations.style.display = 'block';
        regulations();
    }
    return 0;
};
function regulations() {
    duelRegulations.style.display = 'block';
    return 0;
};
function back() {
    duelRegulations.style.display = 'none';
    title.style.display = 'block';
    return 0;
};
function beginningOfTheGame() {

    titleAudio.pause();
    fon.style.display = 'block';

    distance = 0;
    button.addEventListener("click", musicDuel);
    button.addEventListener("click", go);

    function musicDuel() {
        audio.src = 'css/css.music/vestern-duel.mp3';
        audio.autoplay = true;
        audio.volume = 0.70;
        audio1.pause();
        return 0;
    };

    function kilot() {
        userWidth = document.offsetWidth;
        ipo = userHeightWindow * 2;
        fon.style.width = ipo + 'px';
        fon.style.height = userHeightWindow + 'px';
        setTimeout(kilot, 100);
        return 0;
    };
    kilot();
    ter = window.innerWidth - ipo;
    widthAdjustment = ter / 2;
    fon.style.marginLeft = widthAdjustment + 'px';// полоски по бокам 
    //--------------------- button вверху --------------------
    button.addEventListener("mouseover", changesColor);
    button.addEventListener("mouseout", changesColorOut);
    button.addEventListener("mousedown", clickButton);
    button.addEventListener("mouseup", mouseUpButton);
    fon.addEventListener("mousedown", not);
    fon.addEventListener("selectstart", not);

    function changesColor() {
        button1.style.backgroundColor = 'dimgray';
        button2.style.backgroundColor = 'dimgray';
    };

    function changesColorOut() {
        button1.style.backgroundColor = 'rgb(152, 147, 147)';
        button2.style.backgroundColor = 'rgb(152, 147, 147)';
    };

    function clickButton() {
        textButton.style.color = '#ef390b';
        button1.style.backgroundColor = 'dimgray';
        button2.style.backgroundColor = 'dimgray';
    };

    function mouseUpButton() {
        button.style.opacity = 0;
        button.style.hidden = true;
        button.style.transition = '1s';
    };

    function not(event) {
        event.preventDefault(); // отменяет выделение текста при нажатии на кнопке (вверху) 
    };

    return 0;
};
// ------------------------------------------------------------------------
function go() {

    // alert(button.classList.contains("buttonCowboyFotoshop"));
    if (i != 2) {
        cowboyFotoshop.style.opacity = 0;
        cowboyFotoshop.style.display = 'none';
    }
    function random(min, max) {    // РАНДОМНЫЕ ЧИСЛА   ГЕНЕРАТОР ЧИСЕЛ 
        x = min + Math.random() * (max - min);
        x = Math.round(x);
        return x;
    };

    distance = random(routeStart, fon.offsetWidth - routFinish);

    cowboy.style.left = distance + 'px';  // растояние которое пройдет ковбой
    cowboy.style.transition = '5s cubic-bezier(0, 0, 0, 0)';
    //------------ ноги движение ---------------------------------
    let timeLeft = setInterval(raise, 400);
    let time1Left = setInterval(lower, 800);
    let timeRight = setInterval(raise, 400);
    let time1Right = setInterval(lower, 800);

    function raise() {
        leftLeg.style.height = 28 + '%';
        rightLeg.style.height = 35 + '%';
        if (cowboy.offsetLeft == distance) {
            clearInterval(timeLeft);
            clearInterval(timeRight);
            leftLeg.style.height = 35 + '%';
        }
        return 0;
    };

    function lower() {
        leftLeg.style.height = 35 + '%';
        rightLeg.style.height = 28 + '%';
        if (cowboy.offsetLeft == distance) {
            clearInterval(time1Left);
            clearInterval(time1Right);
            leftLeg.style.height = 35 + '%';
            rightLeg.style.height = 35 + '%';
        }
        return 0;
    };
    //-- ----------- руки ----------------------------------------   
    let timeLeftHand = setInterval(top, 400);
    let timeRightHand = setInterval(bottom, 800);

    function top() {
        leftHand2.style.height = 60 + '%';
        document.getElementById("leftHand2").style.transform = "rotate(-40deg)";
        leftHand2.style.transition = '2s cubic-bezier(0, 1, 0, 1)';
        document.getElementById("leftHand2").style.transformOrigin = "top left";

        rightHand2.style.height = 50 + '%';
        rightHand2.style.top = 45 + '%';
        rightHand2.style.left = 55 + '%';
        document.getElementById("rightHand2").style.transform = "rotate(-35deg)";
        rightHand2.style.transition = '2s cubic-bezier(0, 1, 0, 1)';
        document.getElementById("rightHand2").style.transformOrigin = "top right";

        if (cowboy.offsetLeft == distance) {
            clearInterval(timeLeftHand);
            clearInterval(timeRightHand);
            rightHand2.style.height = 60 + '%';
            rightHand2.style.top = 50 + '%';
            rightHand2.style.left = 55 + '%';
            document.getElementById("rightHand2").style.transform = "rotate(45deg)";
        }
        return 0;
    };
    function bottom() {
        leftHand2.style.height = 50 + '%';
        leftHand2.style.top = 45 + '%';
        leftHand2.style.left = -55 + '%';
        document.getElementById("leftHand2").style.transform = "rotate(35deg)";
        leftHand2.style.transition = '2s cubic-bezier(0, 1, 0, 1)';

        rightHand2.style.height = 60 + '%';
        rightHand2.style.top = 45 + '%';
        rightHand2.style.left = 55 + '%';
        document.getElementById("rightHand2").style.transform = "rotate(35deg)";
        rightHand2.style.transition = '2s cubic-bezier(0, 1, 0, 1)';

        if (cowboy.offsetLeft > distance) {
            clearInterval(timeLeftHand);
            clearInterval(timeRightHand);
            rightHand2.style.height = 60 + '%';
            rightHand2.style.top = 50 + '%';
            rightHand2.style.left = 55 + '%';
            document.getElementById("rightHand2").style.transform = "rotate(45deg)";
            leftHand2.style.height = 60 + '%';
            leftHand2.style.top = 50 + '%';
            leftHand2.style.left = 55 + '%';
            document.getElementById("leftHand2").style.transform = "rotate(-45deg)";
        }
        return 0;
    };

    var tyr = setInterval(distancecheck, 100); // проверяет пройденную дистанию

    function distancecheck() { // поднятие руки и ВЫСТРЕЛ
        if (cowboy.offsetLeft == distance) {
            clearInterval(tyr);

            var stopSet = setTimeout(faer, 1000);
            var stopTimeoutFaer = setTimeout(firetimeStart, 2000);

            fon.addEventListener("click", targetCowboy);
            hit = 0;
            function targetCowboy(e) {

                audio2.src = 'css/css.music/Выстрел_mp.mp3';
                audio2.autoplay = true;
                audio2.volume = 0.99;

                let targetBody = e.target.id;
                switch (targetBody) {
                    case 'head':
                    case 'hat':
                    case 'hatText':
                    case 'hat1':
                    case 'eyeLeft':
                    case 'eyeright':
                    case 'nose':
                    case 'mouth':
                        death();
                        clearTimeout(stopSet);
                        clearTimeout(stopTimeoutFaer);
                        fon.removeEventListener("click", targetCowboy);
                        // hatDeathFlight();
                        hatDeathstart();
                        break;
                    case 'torso':
                    case 'belt':
                        hit = hit + 1;
                        if (hit > 1) {
                            death();
                            clearTimeout(stopSet);
                            clearTimeout(stopTimeoutFaer);
                            fon.removeEventListener("click", targetCowboy);
                        }
                        break;
                    case 'leftHand1':
                    case 'leftHand2':
                    case 'rightHand1':
                    case 'rightHand2':
                    case 'leftLeg':
                    case 'leftLegFoot':
                    case 'rightLeg':
                    case 'rightLegFoot':
                        hit = hit + 1;
                        if (hit > 1) {
                            death();
                            clearTimeout(stopSet);
                            clearTimeout(stopTimeoutFaer);
                            fon.removeEventListener("click", targetCowboy);
                        }
                        break;
                    default:
                    //alert('мимо');
                }
            }

            function faer() {
                revolver2.style.display = 'none';
                rightHand2.style.display = 'none';
                revolverShotRight.style.display = 'block';
                return 0;
            };
            var stopBahBah;
            function firetimeStart() {
                firetime();
                function firetime() {
                    shot_5.style.display = 'block';
                    audio3.src = 'css/css.music/Выстрел_mp.mp3';
                    audio3.autoplay = true;
                    audio3.volume = 0.90;
                    fonshot.style.display = 'block';

                    setTimeout(fonshotTime, 350);
                    function fonshotTime() {
                        fonshot.style.display = 'none';
                        return 0;
                    };

                    setTimeout(firetimenone, 250);
                    function firetimenone() {
                        shot_5.style.display = 'none';
                        return 0;
                    };

                    stopBahBah = setTimeout(firetime, 400);
                    setTimeout(() => { clearTimeout(stopBahBah); }, 1000);
                    fon.removeEventListener("click", targetCowboy); // после выстрела ковбоя отменяет 'click'
                    return 0;
                };
                setTimeout(lossUser, 500);
                return 0;
            };
        }
        return 0;
    };
    return 0;
};

function hatDeathstart() {
    hatDeath.style.display = 'block';
    hatDeath.style.zIndex = 5;
    hatDeath.style.left = distance + 20 + 'px';
    setTimeout(hatDeathFlight, 70);
    return 0;
};

function hatDeathFlight() {  // полёт шляпы
    hatDeath.style.left = distance + 150 + 'px';  // растояние которое пройдет шляпа
    hatDeath.style.top = 45 + '%';
    hatDeath.style.transition = '4s cubic-bezier(0, 1, 0, 1)';
    deathHat.style.display = 'none';
    setTimeout(pio, 500);
    return 0;
};

function pio() {  // полёт шляпы
    hatDeath.style.top = 78 + '%';
    hatDeath.style.transition = '1s cubic-bezier(0, 0, 0, 0)';
    return 0;
};

function lossUser() {
    sum = sum - 10;
    total.innerHTML = sum;
    audio1.src = 'css/css.music/rekviem_po_mechte_-_rekviem_po_mechte_(z2.fm).mp3';
    audio1.autoplay = true;
    audio1.volume = 0.90;
    audio.pause();
    messechLoss.innerHTML = 'Tы проиграл';
    setTimeout(menuSmallBlock, 3000);
    return 0;
};

function musicDuel1() {
    sum = sum + 10;
    total.innerHTML = sum;
    audio3.src = 'css/css.music/pobeda-zvuk-pobedy.mp3';
    audio3.autoplay = true;
    audio.pause();
    messechLoss.innerHTML = 'Tы победил !!!';
    return 0;
};

function menuSmallBlock() {
    menuSmall.style.display = 'block';
    fon.style.display = 'none';
    fonMassiv.style.display = 'none';
    return 0;
};

menuSmallButton1.addEventListener("click", zeroing); // пройгрыш - победа менят всё на исходные позиции
menuSmallButton1.addEventListener("click", beginningOfTheGame);

function death() {

    document.querySelector('.CowboyBlood').classList.add('active');
    deathCowboy.style.opacity = 1;
    deathCowboy.style.left = distance + 'px';
    cowboy.style.display = 'none';

    setTimeout(musicDuel1, 1000);
    setTimeout(menuSmallBlock, 3000);
    setTimeout(legLeftTop1, 700);
    function legLeftTop1() {
        document.getElementById("deathCowboyleftLeg").style.transform = "rotate(120deg)";
        deathCowboyleftLeg.style.top = -50 + '%';
        setTimeout(legLeftTop2, 40);
    };
    function legLeftTop2() {
        document.getElementById("deathCowboyleftLeg").style.transform = "rotate(100deg)";
        deathCowboyleftLeg.style.top = -20 + '%';
        setTimeout(legLeftTop3, 40);
    };
    function legLeftTop3() {
        document.getElementById("deathCowboyleftLeg").style.transform = "rotate(80deg)";
        deathCowboyleftLeg.style.top = 10 + '%';
        setTimeout(legLeftTop4, 40);
    };
    function legLeftTop4() {
        document.getElementById("deathCowboyleftLeg").style.transform = "rotate(65deg)";
        deathCowboyleftLeg.style.top = 40 + '%';
        setTimeout(legLeftTop5, 40);
    };
    function legLeftTop5() {
        document.getElementById("deathCowboyleftLeg").style.transform = "rotate(65deg)";
        deathCowboyleftLeg.style.top = 42 + '%'
    };

    setTimeout(legRightTop1, 700);
    function legRightTop1() {
        document.getElementById("deathCowboyrightLeg").style.transform = "rotate(-120deg)";
        deathCowboyrightLeg.style.top = -50 + '%';
        setTimeout(legRightTop2, 40);
    };
    function legRightTop2() {
        document.getElementById("deathCowboyrightLeg").style.transform = "rotate(-100deg)";
        deathCowboyrightLeg.style.top = -20 + '%';
        setTimeout(legRightTop3, 40);
    };
    function legRightTop3() {
        document.getElementById("deathCowboyrightLeg").style.transform = "rotate(-80deg)";
        deathCowboyrightLeg.style.top = 10 + '%';
        setTimeout(legRightTop4, 40);
    };
    function legRightTop4() {
        document.getElementById("deathCowboyrightLeg").style.transform = "rotate(-65deg)";
        deathCowboyrightLeg.style.top = 40 + '%';
        setTimeout(legRightTop5, 40);
    };
    function legRightTop5() {
        document.getElementById("deathCowboyrightLeg").style.transform = "rotate(-65deg)";
        deathCowboyrightLeg.style.top = 42 + '%';
    };
    return 0;
};

function zeroing() {// пройгрыш - победа менят всё на исходные позиции
    menuSmall.style.display = 'none';
    fon.style.display = 'block';
    audio1.pause();
    audio3.pause();
    button.style.opacity = 1;
    cowboy.style.display = 'block';
    cowboy.style.left = -10 + '%';
    cowboy.style.transition = 0 + 's';
    revolver2.style.display = 'block';
    rightHand2.style.display = 'block';
    revolverShotRight.style.display = 'none';
    textButton.style.color = 'black';
    deathCowboy.style.opacity = 0;

    document.getElementById("deathCowboyleftLeg").style.transform = "rotate(140deg)";
    deathCowboyleftLeg.style.top = -70 + '%';
    document.getElementById("deathCowboyrightLeg").style.transform = "rotate(-140deg)";
    deathCowboyrightLeg.style.top = -70 + '%';
    document.querySelector('.CowboyBlood').classList.remove('active');
    hatDeath.style.top = 52 + '%';
    hatDeath.style.display = 'none';
    deathHat.style.display = 'block';
    return 0;
};
//######################################################################################
// №№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№
nextLevel.addEventListener("click", startCowboyFotoshop);

function startCowboyFotoshop() {
    iterator++;
    if (iterator == 3) {
        button.classList.remove("buttonCowboyFotoshop");
        i = i + 1;
        button.classList.toggle("buttonCowboyFotoshop");
        menuSmallButton1.addEventListener("click", zeroing1);
        menuSmallButton2.addEventListener("click", exitMainMenu);
        menuSmallButton2.addEventListener("click", zeroing);
        menuSmallButton2.addEventListener("click", zeroing1);
        button.addEventListener("click", go);
        menuSmallButton1.removeEventListener("click", beginningOfTheGame);
        background.style.display = "none";
        fonMassiv = document.getElementById(fonSwitchMas[i]);
        fonMassiv.style.display = "block";
        fonMassiv.style.opacity = 1;
        var cowboyMassivNone = document.getElementById(cowboyFotoshopMas[1]);
        cowboyMassivNone.style.display = "none";

        cowboyFotoshop.style.left = -10 + "%";
        cowboyFotoshop.style.transition = '0s cubic-bezier(0, 0, 0, 0)';
        zeroing();
        goToggle = document.querySelector('.buttonCowboyFotoshop');
        goToggle.addEventListener("click", goCowboyFotoshop);
    } else {
        button.classList.remove("buttonCowboyFotoshop");
        i = i + 1;
        button.classList.toggle("buttonCowboyFotoshop");
        menuSmallButton1.addEventListener("click", zeroing1);
        menuSmallButton2.addEventListener("click", exitMainMenu);
        menuSmallButton2.addEventListener("click", zeroing1);
        button.removeEventListener("click", go);
        menuSmallButton1.removeEventListener("click", beginningOfTheGame);
        background.style.display = "none";
        fonMassiv = document.getElementById(fonSwitchMas[i]);
        fonMassiv.style.display = "block";
        fonMassiv.style.opacity = 1;
        cowboyFotoshop.style.left = -10 + "%";
        cowboyFotoshop.style.transition = '0s cubic-bezier(0, 0, 0, 0)';
        zeroing();
        goToggle = document.querySelector('.buttonCowboyFotoshop');
        goToggle.addEventListener("click", goCowboyFotoshop);
    }
    return 0;
};
function goCowboyFotoshop() {
    function random(min, max) {    // РАНДОМНЫЕ ЧИСЛА   ГЕНЕРАТОР ЧИСЕЛ 
        x = min + Math.random() * (max - min);
        x = Math.round(x);
        return x;
    };
    cowboyFotoshop.style.display = 'block';
    cowboyFotoshop.style.opacity = 1;
    hatDeath.style.zIndex = -2;
    cowboyMassiv = document.getElementById(cowboyFotoshopMas[i]);
    cowboyMassiv.style.display = 'block';
    if (i > 0) {
        for (ii; ii < i; ii++) {
            cowboyMassiv75 = document.getElementById(cowboyFotoshopMas[ii]);
            cowboyMassiv75.style.display = 'none';
            ii = ii + 1;
        }
    }
    distance1 = random(routeStart, (fon.offsetWidth - routFinish));
    cowboyFotoshop.style.left = distance1 + 'px';  // растояние которое пройдет ковбой
    cowboyFotoshop.style.transition = '5s cubic-bezier(0, 0, 0, 0)';
    cowboyFotoshopGoFunc();
    return false;
};

function cowboyFotoshopGoFunc() { // движение ковбоя ФОТОШОП
    let ty = 0;
    let wy = 0;
    var stopCowboyFotoshopStep = setInterval(cowboyFotoshopStep, 250);
    function cowboyFotoshopStep() {
        wy++;
        if (wy < 4) {
            ty = ty + (-101);
            cowboyMassiv.style.left = ty + "%";
        } else {
            ty = 0;
            wy = 0;
            cowboyMassiv.style.left = ty + "%";
        }

        if (cowboyFotoshop.offsetLeft == distance1) {
            clearInterval(stopCowboyFotoshopStep);
            cowboyMassiv.style.left = -400 + "%";
            stopCowboyTurn = setTimeout(cowboyTurn, 1000);

            cowboyFotoshop.addEventListener("click", shotUser);
            function shotUser(e) {
                let targetBody = e.target.id;

                audio2.src = 'css/css.music/Выстрел_mp.mp3';
                audio2.autoplay = true;
                audio2.volume = 0.99;
                switch (targetBody) {
                    case cowboyMassiv.id:
                        cowboyMassiv.style.left = -600 + "%";
                        setTimeout(() => { cowboyMassiv.style.left = -710 + "%"; }, 1000)
                        cowboyFotoshop.removeEventListener("click", shotUser);
                        musicDuel1();
                        if (iterator < 3) {
                            setTimeout(menuSmallBlock, 2000);
                        } else {
                            setTimeout(menuSmallBlock, 2000);
                            setTimeout(menuSmallEndLevel, 2000);
                        }
                        clearTimeout(stopCowboyTurn);
                        clearTimeout(stopShotCowboyFotoshop);
                        clearTimeout(stopStarLossUser);
                        break;

                    default:
                        break;
                }
                return 0;
            };
        }

        function cowboyTurn() {
            cowboyMassiv.style.left = -500 + "%";
            stopShotCowboyFotoshop = setTimeout(shotCowboyFotoshop, 700);
            stopStarLossUser = setTimeout(starLossUser, 700);
            setTimeout(() => { cowboyFotoshop.removeEventListener("click", shotUser); }, 700);
            return 0;
        };
        return 0;
    };
    return false;
};

function menuSmallEndLevel() {
    nextLevel.style.display = "none";
    menuSmallButton1.style.top = 55 + "%";
    levelNone.style.display = "block";
    return 0;
};

function zeroing1() {
    cowboyFotoshop.style.opacity = 0;
    cowboyFotoshop.display = 'none';
    cowboyFotoshop.style.left = -10 + "%";
    cowboyFotoshop.style.transition = '0s cubic-bezier(0, 0, 0, 0)';
    cowboyMassiv.style.left = 0 + "%";
    fonMassiv.style.display = 'block';
    audio1.pause();
    audio3.pause();
    zeroing();
    return 0;
};

function exitMainMenu() {
    cowboyFotoshop.style.opacity = 0;
    fonMassiv.style.display = 'none';
    fonMassiv.style.opacity = 0;
    menuSmall.style.display = "none";
    title.style.display = "block";
    goToggle.removeEventListener("click", goCowboyFotoshop);
    button.classList.toggle("buttonCowboyFotoshop");
    for (var ik = 1; ik < cowboyFotoshopMas.length; ik++) {
        var cowboyMassiv77 = document.getElementById(cowboyFotoshopMas[ik]);
        cowboyMassiv77.style.display = 'none';
    }

    nextLevel.style.display = "block";
    menuSmallButton1.style.top = 35 + "%";
    levelNone.style.display = "none";
    iterator = 0;
    i = -1;
    ii = 0;
    zeroing1();
    zeroing();
    return 0;
};

function starLossUser() {
    if (iterator < 3) {
        setTimeout(lossUser, 500);
    } else {
        setTimeout(lossUser, 500);
        setTimeout(menuSmallEndLevel, 500);
    }
    return 0;
};

function shotCowboyFotoshop() {  // ВЫСТРЕЛ ковбоя ФОТОШОП, огонь из револьвера
    audio3.src = 'css/css.music/Выстрел_mp.mp3';
    audio3.autoplay = true;
    audio3.volume = 0.90;
    cowboyFotoshopShot.style.display = 'block';

    setTimeout(shotCowboyFotoshopStop, 100);
    function shotCowboyFotoshopStop() {
        cowboyFotoshopShot.style.display = 'none';
        return 0;
    };
    stopsetTimeout = setTimeout(shotCowboyFotoshop, 400);
    setTimeout(() => { clearTimeout(stopsetTimeout); }, 1000);
    return false;
};
//#########################################################################
//#########################################################################

