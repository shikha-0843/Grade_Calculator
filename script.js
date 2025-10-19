function show_result(){
  let c = document.querySelector("#c").value;
  let dsa = document.querySelector("#dsa").value;
  let dbms = document.querySelector("#dbms").value;
  let wt = document.querySelector("#wt").value;
  let py = document.querySelector("#py").value;

  let tot = parseFloat(c) + parseFloat(dsa) + parseFloat(dbms) + parseFloat(wt) + parseFloat(py);
  let per = (tot / 500) * 100;
  
  if(per >= 90){
    document.querySelector(".gra").innerHTML = "A+";
  } else if(per >= 80){
    document.querySelector(".gra").innerHTML = "A";
  } else if(per >= 70){
    document.querySelector(".gra").innerHTML = "B+";
  } else if(per >= 60){
    document.querySelector(".gra").innerHTML = "B";
  } else if(per >= 50){
    document.querySelector(".gra").innerHTML = "C+";
  } else if(per >= 40){
    document.querySelector(".gra").innerHTML = "C";
  } else if(per >= 35){
    document.querySelector(".gra").innerHTML = "D+";
  } else if(per >= 30){
    document.querySelector(".gra").innerHTML = "D";
  } else {
    document.querySelector(".gra").innerHTML = "F";
  }
  document.querySelector(".tot").innerHTML = tot;
  document.querySelector(".per").innerHTML = per;
  
  if(per>30){
    document.querySelector(".result h2").innerHTML = "You are Pass";
  } else{
    document.querySelector(".result h2").innerHTML = "You are Fail";
  }

}