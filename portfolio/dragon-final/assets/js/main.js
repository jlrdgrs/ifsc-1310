var choice = document.getElementById('choice');
console.log("working");
choice.addEventListener('keypress', function(e){
    if(e.keyCode == 13){//keyCode for enter
        if(choice.value == "0"){
          window.location.assign("index.html");
        }else if(choice.value == "1"){
          window.location.assign("dragon.html");
        }else if(choice.value == "2"){
          window.location.assign("history.html");
        }else if(choice.value == "3"){
          window.location.assign("faq.html");
        }
    }
});
