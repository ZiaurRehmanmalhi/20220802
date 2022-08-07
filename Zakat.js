function myZakat(){
let camalZakat=document.getElementById('camal').value;
let result;
if (camalZakat>=400){
    result= "8 Hiqqy";
}
else if (camalZakat>=386){
    result= "7 Hiqqy + 1 Bint e Laboon"
}
else if (camalZakat>=375){
    result= "8 Hiqqy + 1 Bint e Makhaz"
}
else if(camalZakat>=370){
    result="7Hiqqay + 4 goat";
}
else if(camalZakat>=365){
    result="7Hiqqay + 3 goat";
}
else if(camalZakat>=360){
    result="7Hiqqay + 2 goat";
}
else if(camalZakat>=355){
    result="7Hiqqay + 1 goat";


}
else if(camalZakat>=346){
    result="7Hiqqay";


}
else if(camalZakat>=336){
    result="6Hiqqay + 1 Bint e laboon";


}
else if(camalZakat>=325){
    result="6Hiqqay + 1 Bint e makhaz";

}
else if(camalZakat>=320){
    result="6Hiqqay + 4 goat";

}
else if(camalZakat>=315){
    result="6Hiqqay + 3 goat";

}
else if(camalZakat>=310){
    result="6Hiqqay + 2 goat";

}
else if(camalZakat>=305){
    result="6Hiqqay + 1 goat";

}
else if(camalZakat>=296){
    result="6Hiqqay";

}
else if(camalZakat>=286){
    result="5Hiqqay + 1 Bint e laboon";

}
else if(camalZakat>=275){
    result="5Hiqqay + 1 Bint e makhaz";

}
else if(camalZakat>=270){
    result="5Hiqqay + 4 goat";

}
else if(camalZakat>=265){
    result="5Hiqqay + 3 goat";

}
else if (camalZakat>=260){
    result="5Hiqqay + 2 goat";

}
else if(camalZakat>=255){
    result="5Hiqqay +  1 goat";

}
else if(camalZakat>=246){
    result="5Hiqqay";

}
else if(camalZakat>=236){
    result="4Hiqqay + 1 Bint e laboon";

}
else if (camalZakat>=225){
    result="4Hiqqay + 1 Bint e makhaz";

}
else if (camalZakat>=220){
    result="4Hiqqay + 4 goat";

}
else if (camalZakat>=215){
    result="4Hiqqay + 3 goat";

}
else if(camalZakat>=210){
    result="4Hiqqay + 2 goat";

}
else if (camalZakat>=205){
    result="4Hiqqay + 1 goat";

}
else if (camalZakat>=196){
    result="4Hiqqay";
}
else if (camalZakat>=186){
    result="3Hiqqay + 1 Bint e laboon";
}
else if(camalZakat>=175){
    result="3Hiqqay + 1Bint e makhaz";
}
else if(camalZakat>=170){
    result="3Hiqqay + 4goat";
}
else if (camalZakat>=165){
    result="3Hiqqay + 3goat";
}
else if (camalZakat>=160){
    result="3Hiqqay + 2goat";     }
else if (camalZakat>=155){
    result="3Hiqqay + 1goat";
}
else  if (camalZakat>=150){
  result="3Hiqqay";
}else if (camalZakat>=145){
    result="2Hiqqay+1 Bent e makhaz";
}else if(camalZakat>=140){
    result="2Hiqqay+4 goat ";
}else if(camalZakat>=135){
    result="2Hiqqay+3 goat ";
}else if(camalZakat>=130){
    result="2Hiqqay+2 goat ";
}else if(camalZakat>=125){
    result="2Hiqqay+1 goat ";
}else if(camalZakat>=120){
    result="2Hiqqay ";
}
else if (camalZakat>=91){
    result= "2 hiqqy"
}
else if (camalZakat>=76){
    result = "2 Bint e Laboon";
}
else if (camalZakat>=61){
    result= "1 Jiza"
}
else if (camalZakat>=46){
    result="1 Hiqqa"
}
else if (camalZakat>=36){
    result= "2 Bint e Laboon";
}
else if (camalZakat>=26){
    result= "2 Bint e Makhaz";
}
else if (camalZakat>=20){
    result= "4 Goat";
}
else if (camalZakat>=15){
    result= "3 Goat";
}
else if (camalZakat>=10){
    result= "2 Goat";
}
else if (camalZakat>=5){
    result= "1 Goat";
}
else {
    result="No Zakat";
}
document.getElementById('h2').innerText=result;
}