function solve(x){
document.getElementById("input").value += x;}
function clr()
{
document.getElementById("input").value="";
}
function eq(){
var t = document.getElementById("input").value;
var result = eval(t);
document.getElementById("input").value = result;
}