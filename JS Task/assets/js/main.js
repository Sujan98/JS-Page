var value,radio;
var c= 0,x=0;
var opt2 = document.getElementsByClassName("def-opt")[0];
var html = document.getElementsByClassName("select-div")[0].innerHTML;

function fields() {        
    document.getElementsByClassName("select-div")[0].style.display = "none";
    $(".output-1").html("");
    value = $(".input-field").val();
    value =Number(value);     
    if(value != "") {
        $(".submit-2").css("display", "inline-block");
    }
    else{
        alert("Fill Details");
    }  
    for(var i=0;i<value;i++) {                
        if(document.querySelectorAll(".radio-o")[0].checked == true) { 
            radio=0; 
            var inp = document.createElement("input");
            inp.type = "text";
            inp.value = ""; 
            inp.classList.add("field");
            inp.name = "field";
            inp.placeholder = "Enter Input";
            $(".output-1")[0].append(inp);
            var chec = document.createElement("input");
            chec.type = "checkbox";
            chec.classList.add("check");
            chec.name = "checkbox";
            chec.value = "check-" + i;
            $(".output-1")[0].append(chec);        
        }
        else if(document.querySelectorAll(".radio-o")[1].checked == true) {  
            radio=1;          
            var inp = document.createElement("input");
            inp.type = "text";
            inp.value = "";
            inp.classList.add("field");
            inp.name = "field";
            inp.placeholder = "Enter Input";
            $(".output-1")[0].append(inp);
    }
    else{
        alert("Fill Details");
        $(".submit-2").css("display", "none");
        break;
    }
}
}

function field() { 
    x=0;   
    $(".drop-div").remove();
    $(".def-opt").val("");
    var SelDiv = document.getElementsByClassName("select-div")[0]; 
    var checks = document.querySelectorAll(".check");  
    var selOpt = document.getElementsByClassName("opt-div")[0];         
    SelDiv.style.display = "inline-block";        
    var sel = document.getElementsByClassName("select")[0];
    for(var i=0;i<value;i++) {     
    var opt = document.createElement("option");
    opt.classList.add("option");
    opt.innerHTML = document.getElementsByClassName("field")[i].value;
    sel.append(opt);        
    }        
    var options = document.querySelectorAll(".option");
    if(radio == 0) {            
    for(var i=0;i<value;i++) {
        var dropDiv = document.createElement("div");        
        var chec = document.createElement("input");
        chec.type = "checkbox";
        chec.classList.add("check-o");
        chec.name = "checkbox";
        chec.value = "check-" + i;
        dropDiv.innerHTML = options[i].innerHTML;
        dropDiv.classList.add("drop-div");
        dropDiv.onmouseover = "hover()";
        dropDiv.classList.add("clearfix");
        dropDiv.style.visibility = "hidden";        
        dropDiv.appendChild(chec);       
        selOpt.append(dropDiv); 
        options[i].style.display = "none";
        if(document.querySelectorAll(".check")[i].checked == true) {
            x = x + 1;            
            opt2.value = "Selected Text: " + x;            
        }
        sel.removeChild(options[i]);
}
    
    sel.style.display = "none";    
if(opt2.value == "") {
    opt2.value = "Selected Text: " + 0;
}
document.getElementsByClassName("drop-div")[0].classList.add("hover");
var checkO = document.querySelectorAll(".check-o");
var checks = document.querySelectorAll(".check");
for(i=0;i<value;i++) {
    if(checks[i].checked == true) {        
        checkO[i].checked = true;
    }
    }        
}
else {
    opt2.value = options[0].innerHTML;
    for(var i=0;i<value;i++) {
        var dropDiv = document.createElement("div");                
        dropDiv.innerHTML = options[i].innerHTML;
        dropDiv.classList.add("drop-div");        
        dropDiv.classList.add("clearfix");
        dropDiv.style.visibility = "hidden";                       
        selOpt.append(dropDiv); 
        options[i].style.display = "none";        
        sel.removeChild(options[i]);                   
}

sel.style.display = "none";   
document.getElementsByClassName("drop-div")[0].classList.add("hover");
}
$(".drop-div").mouseover(function() {
    document.getElementsByClassName("hover")[0].classList.remove("hover");
    event.target.classList.add("hover");
});
}

document.addEventListener("click", function() {
    var drop = document.querySelectorAll(".drop-div");        
    if(document.getElementsByClassName("select-div")[0].style.display == "inline-block") {
   
    
    
    var i = 0;        
    if(event.target.classList.contains("drop-div")) {
        
    }
    if(event.target == document.getElementsByClassName("def-opt")[0] || event.target == document.getElementsByClassName("fa")[0]){           
    if(drop[0].classList.contains("show")) {
        drop.forEach(function() {
            drop[i].classList.remove("show");
            i++;
        });
    }
    else {
        drop.forEach(function() {
            drop[i].classList.add("show");
            i++;
        });
    }
}

else if (event.target.classList.contains("check-o")) {
    var checkO = document.querySelectorAll(".check-o");
    var checks = document.querySelectorAll(".check");
    var index = [].indexOf.call(checkO, event.target);    
    if(checkO[index].checked == true) {
    checks[index].checked = true;
    x++;
    document.getElementsByClassName("def-opt")[0].value = "Selected Text: " + x;            
    }
    else {
        checks[index].checked = false;
        x--;
        document.getElementsByClassName("def-opt")[0].value = "Selected Text: " + x;            
    }
}
else if (event.target.classList.contains("check")) {
    var checkO = document.querySelectorAll(".check-o");
    var checks = document.querySelectorAll(".check");
    var index = [].indexOf.call(checks, event.target);    
    if(checks[index].checked == true) {
    checkO[index].checked = true;
    x++;
    document.getElementsByClassName("def-opt")[0].value = "Selected Text: " + x;            
    }
    else {
        checkO[index].checked = false;
        x--;
        document.getElementsByClassName("def-opt")[0].value = "Selected Text: " + x;            
    }
}
else {
    drop.forEach(function() {
        drop[i].classList.remove("show");
        i++;
    });
}
    }
    if(document.querySelectorAll(".radio-o")[1].checked == true) {           
        if(event.target.classList.contains("drop-div")) {
            document.getElementsByClassName("def-opt")[0].value = event.target.innerHTML;
        }
    }
});

document.addEventListener("keydown", function(e) {       
    if(document.getElementsByClassName("drop-div")[0].classList.contains("show")) {
    var drop = document.querySelectorAll(".drop-div"); 
    var l = drop.length;
    l--;
    var checkO = document.querySelectorAll(".check-o");
        var checks = document.querySelectorAll(".check");
    var hov = document.getElementsByClassName("hover")[0];    
     
    if(e.keyCode == 40){       
        var ind = [].indexOf.call(drop, hov);        
        if(ind != l){
        window.scrollBy( 0, 0 );
        ind++;
        hov.classList.remove("hover");
        drop[ind].classList.add("hover");
        }
    }
    else if(e.keyCode == 38) {
        var ind = [].indexOf.call(drop, hov);        
        if(ind != 0){
        window.scrollBy( 0, 0 );
        ind--;
        hov.classList.remove("hover");
        drop[ind].classList.add("hover");
    }
}
    else if(e.keyCode == 13) {        
        if(radio == 0) {
            var ind = [].indexOf.call(drop, hov);  
                if(checkO[ind].checked == true) {
                checkO[ind].checked = false; 
                checks[ind].checked = false;
                x--;
                document.getElementsByClassName("def-opt")[0].value = "Selected Text: " + x;   
                }
                else if (checkO[ind].checked == false) {
                    checkO[ind].checked = true;
                    checks[ind].checked = true;
                    x++;
                    document.getElementsByClassName("def-opt")[0].value = "Selected Text: " + x;   
        
    }
}
else if (radio == 1) {
    var ind = [].indexOf.call(drop, hov);  
    document.getElementsByClassName("def-opt")[0].value = hov.innerHTML;
    var i = 0;
    drop.forEach(function() {
        drop[i].classList.remove("show");
        i++;
    });
    }
    
}
    }
});

// document.addEventListener("keyup", function(e) {
//     var drop = document.querySelectorAll(".drop-div"); 
//     var hov = document.getElementsByClassName("hover")[0];    
//     var ind = [].indexOf.call(drop, hov);    
//     if(radio=0) {
//         if(e.keyCode == 13) {

//         }
//     }
// });