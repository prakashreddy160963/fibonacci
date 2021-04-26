var a=0;
var b=1;
var c;
var output="0"+" "+"1" ;
var n;
console.log(a);
console.log(b);
function fibonacci()
{
    n=document.getElementById("input").valueAsNumber;
    for(var i=0; i<n-2; i++)
{
    c=a+b;
    a=b;
    b=c;
    output=output+" "+ c;
    
    console.log(c);
}
      document.getElementById("result").innerHTML=output; 
      document.getElementById("result").style.color='blue';

}