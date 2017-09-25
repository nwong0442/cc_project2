function stoppedTyping(){
    if(this.value.length > 0) { 
        document.getElementById('next').disabled = false; 
    } else { 
        document.getElementById('next').disabled = true;
    }
}
function verify(pageNumber){
    if myText is empty{
        alert "Please input a number."
        return
    }
    else{
        href="page" + pageNumber + ".html"
}