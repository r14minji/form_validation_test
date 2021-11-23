class Validation{

  constructor(){
    this.form = document.querySelector("#member");
    this.btnSubmit = document.querySelector("input[type=submit]");
  
    this.btnSubmit.addEventListener("click", e=>{
      if(!this.isTxt("userid", 5)) e.preventDefault();
      if(!this.isTxt("comments", 20)) e.preventDefault();
      if(!this.isEmail("email", 5)) e.preventDefault();
      if(!this.isCheck("gender")) e.preventDefault();
      if(!this.isCheck("hobby")) e.preventDefault();
      if(!this.isSelect("edu")) e.preventDefault();
      if(!this.isPwd("pwd1", "pwd2", 5)) e.preventDefault();
    })
  }

  isTxt(name, len){
    const input = this.form.querySelector(`[name=${name}]`);
    const txt = input.value;
    
    if( txt.length >= len && txt != ""){
      const errMsgs = document.closest("td").querySelectorAll("p");
      if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

      return true;
    }else{
      const errMsgs = input.closest("td").querySelectorAll("p");
      if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

      const errMsg = document.createElement("p");
      errMsg.append(`입력항목을 ${len}글자 이상 입력하세요.`);
      input.closest("td").append(errMsg); 
      return false;
    }
  }

  isEmail(name, len){
    const input = this.form.querySelector(`[name=${name}]`);
    const txt = input.value;
    //txt.includes("@")
    if(txt.length> len && /@/.test(txt)){
      const errMsgs = input.closest("td").querySelectorAll("p");
      if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();
      return true;
    }else{
      const errMsgs = input.closest("td").querySelectorAll("p");
      if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

      const errMsg = document.createElement("p");
      errMsg.append(`@를 포함한 이메일 주소를 ${len}글자 이상 입력하세요.`);
      input.closest("td").append(errMsg); 
      return false;
    }
  }

  isCheck(name){
    const inputs = this.form.querySelectorAll(`[name=${name}]`);
    let isChecked = false;

    for(let input of inputs){
      if(input.checked) isChecked = true;
    }

    if(isChecked){
      const errMsgs = inputs[0].closest("td").querySelectorAll("p");
      if(errMsgs.length > 0) input[0].closest("td").querySelector("p").remove();
      return true;
    }else{
      const errMsgs = inputs[0].closest("td").querySelectorAll("p"); 
      if(errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

      const errMsg = document.createElement("p");
      errMsg.append("필수 입력사항을 체크하세요.");
      inputs[0].closest("td").append(errMsg);
      return false;
    }
  }

  isSelect(name){
    const sel= this.form.querySelector(`[name = ${name}]`);
    
    //var sel_index = sel.options.selectedIndex;
    //var val = sel.options[sel_index].value;
    const val = sel.value;

    if(val !== ""){
      const errMsgs = sel.closest("td").querySelectorAll("p");
      if(errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

      return true;
    }else{
      const errMsgs = sel.closest("td").querySelectorAll("p");
      if(errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

      const errMsg = document.createElement("p");
      errMsg.append("항목을 선택해주세요");
      sel.closest("td").append(errMsg);
      
      return false;
    }
  }

  isPwd(name1, name2, len){
    const pwd1 = this.form.querySelector(`[name=${name1}]`);
    const pwd2 = this.form.querySelector(`[name=${name2}]`);
    const pwd1_val = pwd1.value;
    const pwd2_val = pwd2.value;


    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[~!@#$%^&*()_+-=]/;
    

    if(pwd1_val === pwd2_val && pwd1.length> len && eng.test(pwd1_val) && num.test(pwd1_val) && spc.test(pwd1_val)){
      const errMsgs = pwd1.closest("td").querySelectorAll("p");
      if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove();

      return true;
    }else{

      const errMsgs = pwd1.closest("td").querySelectorAll("p");
      if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove();

      const errMsg = document.createElement("p");
      errMsg.append(`비밀번호를 ${len}글자 이상, 영문, 숫자, 특수문자 모두 포함해서 동일하게 입력하세요`);
      pwd1.closest("td").append(errMsg);

      return false;
    }
  }
}

