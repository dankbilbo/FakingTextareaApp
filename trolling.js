let str = "YOU ARE SO STUPID HAHAHA!!!";
function troll(){
    var t = document.getElementById("text").value;
    for(let i = 0; i < t.length; i++){
        let newStr = t.replace(t, str.substring(0, i + 1));
        document.getElementById("text").value = newStr;
        if(t.length > str.length){
            document.getElementById("text").value = "";
        }
    }
}