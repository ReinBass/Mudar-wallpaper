function ChangeWPP(imgId){
    switch(imgId) {
        case "1":
            document.body.style.backgroundImage = "url('FP.JPG')";
            
        break;
        case "2":
            document.body.style.backgroundImage = "url('DC.jpg')";
      
        break;
    }
}

document.getElementById("1").addEventListener("click", function() {
    ChangeWPP("1");
});


document.getElementById("2").addEventListener("click", function() {
    ChangeWPP("2");
});
