var form = document.querySelector("#member");
var btnSubmit = document.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", function(e){
  if(!isTxt("userid", 5)) e.preventDefault();
  if(!isTxt("comments", 20)) e.preventDefault();
  if(!isEmail("email", 5))e.preventDefault();
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
  
  if(txt.length> len && /@/.test(txt)){
    var errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();
    return true;
  }else{
    var errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    var errMsg = document.createElement("p");
    errMsg.append(`이메일 주소를 ${len}글자 이상 입력하세요.`);
    input.closest("td").append(errMsg); 
    return false;
  }
}