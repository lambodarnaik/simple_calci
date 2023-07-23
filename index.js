document.addEventListener("keydown",keyBoardButton)
function keyBoardButton(event){
    var b=event.key;
   compute(event.key);
    buttonAnimation(event.key);
}
$("button").click(function(){
    if ($(".display").val()==="Infinity" ){
        var b="";
        $(".display").val(b);
    }
    var b=this.innerHTML;
    compute(b)
})
function compute(b){
    if (b ==="="){
        var total=eval($(".display").val());
        $(".display").val(total);
    }
    else if(b==="C"){
        var cl="";
        $(".display").val(cl);
    }
    else if(b==="x" || b==="Backspace"){
        var num="";
        num=$(".display").val();
        var len=num.length-1;
        $(".display").val(num.slice(0,len));
    }
    else{
    $(".display").val($(".display").val()+b);
    }
}
function buttonAnimation(currentkey){
    activebutton=document.querySelector(".div"+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");},100);
}