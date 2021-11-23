var form = document.querySelector("#member");
var btnSubmit = document.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", function(e){
  if(!isTxt("userid", 5)) e.preventDefault();
  if(!isTxt("comments", 20)) e.preventDefault();
  if(!isEmail("email", 5)) e.preventDefault();
  if(!isCheck("gender")) e.preventDefault();
  if(!isCheck("hobby")) e.preventDefault();
})

function isTxt(name, len){
  var input = form.querySelector(`[name=${name}]`);
  var txt = input.value;
  
  if( txt.length >= len && txt != ""){
    const errMsgs = document.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    return true;
  }else{
    var errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    var errMsg = document.createElement("p");
    errMsg.append(`입력항목을 ${len}글자 이상 입력하세요.`);
    input.closest("td").append(errMsg); 
    return false;
  }
}

function isEmail(name, len){
  var input = form.querySelector(`[name=${name}]`);
  var txt = input.value;
  //txt.includes("@")
  if(txt.length> len && /@/.test(txt)){
    var errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();
    return true;
  }else{
    var errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    var errMsg = document.createElement("p");
    errMsg.append(`@를 포함한 이메일 주소를 ${len}글자 이상 입력하세요.`);
    input.closest("td").append(errMsg); 
    return false;
  }
}

function isCheck(name){
  var inputs = form.querySelectorAll(`[name=${name}]`);
  var isChecked = false;

  for(var input of inputs){
    if(input.checked) isChecked = true;
  }

  if(isChecked){
    var errMsgs = inputs[0].closest("td").querySelectorAll("p");
    if(errMsgs.length > 0) input[0].closest("td").querySelector("p").remove();
    return true;
  }else{
    var errMsgs = inputs[0].closest("td").querySelectorAll("p"); 
    if(errMsgs.length > 0) input[0].closest("td").querySelector("p").remove();

    var errMsg = document.createElement("p");
    errMsg.append("필수 입력사항을 체크하세요.");
    inputs[0].closest("td").append(errMsg);
    return false;
  }
}