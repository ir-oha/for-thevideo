function getValue(idname){
    //入力された値を取得する
    var result = document.getElementById(idname).value;
   
    //正解と比較する
    if(result == "SUBLIMINAL" || result == "Subliminal" || result == "サブリミナル"){
      location.href = "adsjkhasfdjh.html";  //移動先のURL
    }else{
      alert("違うよ～残念");  
    }
  }
