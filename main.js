function startclassification() 
{ navigator.mediaDevices.getUserMedia({ audio: true}); 
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MSag_jfsm/model.json', modelReady); }
 function modelReady()
 { classifier.classify( gotResults); }
 function gotResults(error,results)
{
 {
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         random_number_r =Math.floor(Math.random()*255)+1;
         random_number_g =Math.floor(Math.random()*255)+1;
         random_number_b =Math.floor(Math.random()*255)+1;
 document.getElementById("result_label").innerHTML="i can hear - "+results[0].label;
 document.getElementById("result_confidence").innerHTML="accuracy - "+(results[0].confidence*100).toFixed (2)+"%";
 document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
Img1=document.getElementById("rm");
Img2=document.getElementById("jin");
Img3=document.getElementById("suga");
Img4=document.getElementById("j-hope");
Img1=document.getElementById("jimin");
Img2=document.getElementById("v");
Img3=document.getElementById("jk");
if(results[0].label=="dynamite"){
    Img1.src="rm.gif";
    Img2.src="jin.jpeg";
    Img3.src="suga.jpeg";
    Img4.src="j-hope.jpeg";
    Img1.src="jimin.jpeg";
    Img2.src="v.jpeg";
    Img3.src="jk.jpeg";
}
else if(results[0].label=="dna"){
    Img1.src="rm.jpeg";
    Img2.src="jin.gif";
    Img3.src="suga.jpeg";
    Img4.src="j-hope.jpeg";
    Img1.src="jimin.jpeg";
    Img2.src="v.jpeg";
    Img3.src="jk.jpeg";
}
else if(results[0].label=="fake love"){
    Img1.src="rm.jpeg";
    Img2.src="jin.jpeg";
    Img3.src="suga.gif";
    Img4.src="j-hope.jpeg";
    Img1.src="jimin.jpeg";
    Img2.src="v.jpeg";
    Img3.src="jk.jpeg";
}
else if(results[0].label=="idol"){
    Img1.src="rm.jpeg";
    Img2.src="jin.jpeg";
    Img3.src="suga.jpeg";
    Img4.src="j-hope.gif";
    Img1.src="jimin.jpeg";
    Img2.src="v.jpeg";
    Img3.src="jk.jpeg";
}
else if(results[0].label=="butter"){
    Img1.src="rm.jpeg";
    Img2.src="jin.jpeg";
    Img3.src="suga.jpeg";
    Img4.src="j-hope.jpeg";
    Img1.src="jimin.gif";
    Img2.src="v.jpeg";
    Img3.src="jk.jpeg";
}
else if(results[0].label=="spring day"){
    Img1.src="rm.jpeg";
    Img2.src="jin.jpeg";
    Img3.src="suga.jpeg";
    Img4.src="j-hope.jpeg";
    Img1.src="jimin.jpeg";
    Img2.src="v.gif";
    Img3.src="jk.jpeg";
}
else if(results[0].label=="permission to dance") {
        Img1.src="rm.jpeg";
    Img2.src="jin.jpeg";
    Img3.src="suga.jpeg";
    Img4.src="j-hope.jpeg";
    Img1.src="jimin.jpeg";
    Img2.src="v.jpeg";
    Img3.src="jk.gif";
}
    }
}

}
