const btn = document.querySelector(".btn");
var x = document.getElementById("form");
var form = document.getElementById("formValue");

function startTimer(e) {
  e.preventDefault();
  var text = "";
  text = x.elements[0].value;

  //   form.innerHTML = text;
  var textTime = text;

  writeTime(textTime);
}

function writeTime(val) {
  var textTime = val;
  //   console.log(textTime);

  var time = textTime * 60;
  var min = "";
  var sec = "";

  var x = setInterval(() => {
    //   hour =
    min = parseInt(time / 60);
    sec = time % 60;

    document.getElementById("demo").innerHTML = min + ":" + sec;
    time--;

    if (time < 0) {
      clearInterval(x);

      document.getElementById("demo").innerHTML = "시간초과";
    }
  }, 1000);
}

// function function1()
// {
//   var variable1=12;
//   function2(variable1);
// }

// function function2(val)
// {
//   var variableOfFunction1 = val;

btn.addEventListener("click", startTimer);

// var time = text * 60;
// var min = "";
// var sec = "";

// var x = setInterval(() => {
//   min = parseInt(time / 60);
//   sec = time % 60;

//   document.getElementById("demo").innerHTML = min + "분" + sec + "초";
//   time--;

//   if (time < 0) {
//     clearInterval(x);

//     document.getElementById("demo").innerHTML = "시간초과";
//   }
// }, 1000);

// var time = text;
// var min = "";
// var sec = "";

// var x = setInterval(() => {
//   min = parseInt(time / 60);
//   sec = time % 60;

//   document.getElementById("demo").innerHTML = min + "분" + sec + "초";
//   time--;

//   if (time < 0) {
//     clearInterval(x);

//     document.getElementById("demo").innerHTML = "시간초과";
//   }
// }, 1000);
