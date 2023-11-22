document.getElementById("env-arquivo").onchange = ()=>{
    let ul = document.getElementById("lista");
    let files = document.getElementById("env-arquivo").files;
    for(let i = 0;i<files.length;i++){
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(files[i].name));
      ul.appendChild(li);
    }
  }
