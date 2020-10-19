// 지금 숫자 입력하고 연산자 입력하면 숫자 따로 연산자 따로 분리 왼료시킴
// 근데 연산자는 스트링에서 어떻게 연산자로 바꿀지는 잘 모르겠다. 오늘은 여기까지

const btn = document.querySelector(".btn");
let x = document.querySelector(".form");
const sum = document.querySelector(".sum");

let LIST_NUM = [];
let LIST_OPERATOR = [];

function calNumber(e) {
  e.preventDefault();
  let text = "";
  text = x.elements[0].value;

  let LIST_ITEM = text.split(" ");

  for (let i = 0; i < LIST_ITEM.length; i++) {
    if (i % 2 === 0) {
      LIST_NUM.push(parseInt(LIST_ITEM[i], 10));
      console.log(typeof parseInt(LIST_ITEM[i], 10));
      console.log(LIST_NUM);
    } else {
      LIST_OPERATOR.push(LIST_ITEM[i]);
      console.log(LIST_OPERATOR);
    }
  }

  sum.innerHTML = LIST_ITEM;
}

btn.addEventListener("click", calNumber);

// {
/* <form id="frm1">
    First name: <input type="text" name="fname" value="Donald"><br>
    Last name: <input type="text" name="lname" value="Duck"><br>
    <input type="submit" value="submit">
  </form>
  <button onclick="myFunction()">Try</button>
  <p id="demo"></p>
</body>
<script>
  function myFunction(){
    var x = document.getElementById("frm1");
     //frm1에 해당하는 값들 배열형식으로 가져오기
    var text="";
    var i;
    for(i=0;i<x.length;i++){
      text+=x.elements[i].value + "<br>";
       //x내의 value값을 뽑아내서 text에 저장
    }
    document.getElementById("demo").innerHTML = text;
  }
</script>
  */
// }
