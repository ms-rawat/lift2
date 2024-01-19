//button statuses
var DownButtonAtlevel2pressStatus = false;
var UpButtonAtlevel0pressStatus = false;
var DownButtonAtlevel1pressStatus = false;
var UpButtonAtlevel1pressStatus = false;
// for down button @level2
document.querySelector('.downButtonatlevel2').addEventListener('click', actionOnDownPressAtlevel2);



function actionOnDownPressAtlevel2() {
    var audio = document.getElementById('buttonAudio');
    audio.play()
    //1
    DownButtonAtlevel2pressStatus = true;
    UpButtonAtlevel0pressStatus = false;
    DownButtonAtlevel1pressStatus = false;
    UpButtonAtlevel1pressStatus = false;

    let element = document.querySelector('.elevator');
    element.classList.remove("topmost");
    element.classList.remove('oneStep')
    element.classList.remove('elevatoratlevel1')
    element.classList.add('twoStep')
    element.classList.add("atGround");
}

// for up button @leve0
document.querySelector('.upButtonatlevel0').addEventListener('click', actionOnupPressAtlevel0);

async function actionOnupPressAtlevel0() {
    var audio = document.getElementById('buttonAudio');
    audio.play()
    //2

    UpButtonAtlevel0pressStatus = true;
    DownButtonAtlevel2pressStatus = false;
    DownButtonAtlevel1pressStatus = false;
    UpButtonAtlevel1pressStatus = false;

    let element = document.querySelector('.elevator');

    element.classList.remove("atGround");
    element.classList.remove('oneStep')
    element.classList.remove('elevatoratlevel1')

    element.classList.add('twoStep')
    element.classList.add("topmost");
}

// for up Button @level1
document.querySelector('.upButtonAtlevel1').addEventListener("click", actionAtupClick);
async function actionAtupClick() {
    var audio = document.getElementById('buttonAudio');
    audio.play()

    // 3
    UpButtonAtlevel1pressStatus = true;
    // DownButtonAtlevel2pressStatus = false;
    // UpButtonAtlevel0pressStatus = false;
    DownButtonAtlevel1pressStatus = false;


if(UpButtonAtlevel0pressStatus){

    let elevator = document.querySelector('.elevator')
    elevator.classList.remove("twoStep")
    elevator.classList.add("oneStep")

    elevator.classList.remove('atGround')
    elevator.classList.add('elevatoratlevel1')

}
if(DownButtonAtlevel2pressStatus)
{
    let element = document.querySelector('.elevator');
    element.classList.remove("topmost");
    element.classList.remove('oneStep')
    element.classList.remove('elevatoratlevel1')
    element.classList.add('twoStep')
    element.classList.add("atGround");
}
  

}

//for down button @level1
document.querySelector('.downButtonAtlevel1').addEventListener("click", actionAtdownclick);
async function actionAtdownclick() {
    var audio = document.getElementById('buttonAudio');
    audio.play()
    //4
    DownButtonAtlevel1pressStatus = true;
    UpButtonAtlevel1pressStatus = false;
    // DownButtonAtlevel2pressStatus = false;
    // UpButtonAtlevel0pressStatus = false;

    if(DownButtonAtlevel2pressStatus)
    {
    let elevator = document.querySelector('.elevator')
    elevator.classList.remove("twoStep")
    elevator.classList.add("oneStep")

    elevator.classList.remove('topmost')
    elevator.classList.add('elevatoratlevel1')
    }
    if(UpButtonAtlevel0pressStatus)
    {
        let element = document.querySelector('.elevator');

        element.classList.remove("atGround");
        element.classList.remove('oneStep')
        element.classList.remove('elevatoratlevel1')
    
        element.classList.add('twoStep')
        element.classList.add("topmost");

    }

}

document.querySelector('.elevator').addEventListener('transitionstart',function()
{
    let element = document.getElementById('elevatorSound')
    element.play()
})

document.querySelector('.elevator').addEventListener('transitionend',function()
{
    let element = document.getElementById('elevatorSound')
    element.pause()
    let anoterelement = document.getElementById('elevatorReached')
    anoterelement.play()
})





