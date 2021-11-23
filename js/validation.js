var form = document.querySelector("#member");
var btnSubmit = document.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", function(e){
  

  if(!isTxt("userid", 5)) e.preventDefault();
})

function isTxt(name, len){
  var input = document.querySelector(`input[name=${name}]`);
  var txt = input.value;
  
  if( txt.length >= len && txt != ""){
    const errMsgs = document.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();
    
    return true;
  }else{
    //서브밋되는걸 막아야해. -> 이베트 함수실행을 막아야함.
    // 5글자 이상 입력하세요. 문구 보여줘야해.
    // 누적해서 오류문구가 계속 생김
    var errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    var errMsg = document.createElement("p");
    errMsg.append(`입력항목을 ${len}글자 이상 입력하세요.`);
    input.closest("td").append(errMsg); // 뒤에 넣는다. innerHTML은 다 지우고 넣는다.
    return false;
  }
}