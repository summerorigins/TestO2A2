//GLOBAL VARIABLES//

//scene arrays
var sceneArr = [];
//dialog arrays
var diaArr = [];

var diaIndex = 0;

//dialog objects, contains informatioin such as the person speaking,
//the current line being said,
//boolean of whether or not queen is rotated
//boolean whether or not the choices window appear

var dia1Obj = {
  //character currently speaking//
  characterName: "Queen",
  //current line being said//
  currentLine: "This is the first text",
  //is queen upright?//
  queenPos: true,
  //is there an option?
  diaChoice: false,
};
diaArr.push(dia1Obj);

var dia2Obj = {
  characterName: "Lady in waiting",
  currentLine: "This is the second text,",
  queenPos: false,
  diaChoice: false,
};
diaArr.push(dia2Obj);

var dia3Obj = {
  characterName: "Queen",
  currentLine: "Ah, it's your first dialoge option. Do pick.",
  queenPos: true,
  diaChoice: true,
  //choices text if diachoice is true
  //(i.e if diaChoice = true, let choice1 output "blabla", let choice2 output "buhbuh")
  choice1: "Option1",
  choice2: "Option2",
};
diaArr.push(dia3Obj);

var dia4Obj = {
  characterName: "Lady in Waiting",
  currentLine: "You picked Option1",
  queenPos: true,
  diaChoice: false,
};
diaArr.push(dia4Obj);

var dia5Obj = {
  characterName: "Lady in Waiting",
  currentLine: "You picked Option2",
  queenPos: false,
  diaChoice: false,
};
diaArr.push(dia5Obj);

var dia6Obj = {
  characterName: "Queen",
  currentLine: "And now we are back on track! Good job reaching this far!",
  queenPos: true,
  diaChoice: false,
};
diaArr.push(dia6Obj);

console.log(diaArr);
// actual gameplay stuff

//dialog processing area
var diaFunct = function () {
  //current displayed text:
  var currentText = document.getElementById("textBox");
  currentText.innerHTML = diaArr[diaIndex].currentLine;

  var currentSpeaker = document.getElementById("charaName");
  currentSpeaker.innerHTML = diaArr[diaIndex].characterName;

  console.log(diaArr[diaIndex].currentLine);
  diaIndex++;
  console.log(diaIndex);
};

var textBox = document.querySelector("#dialogBox");
textBox.addEventListener("click", textFunction);
textBox.addEventListener("onkeydown", textFunction);
function textFunction() {
  diaFunct();
}

//function to rotate sprite
var queenSprite = document.querySelector("#queenSprite");
var queenPos = true;
queenSprite.addEventListener("click", function () {
  if (queenPos) {
    queenSprite.className = "upright";
  } else {
    queenSprite.className = "reversed";
  }
  queenPos = !queenPos;
});

// var main = function (input) {
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };
