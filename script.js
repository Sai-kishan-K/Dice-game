var max=6
var min=1
var p1=0
var p2=0
var count=1
var total=30
var n1="Player 1"
var n2="Player 2"
function names(){
    n1=prompt("Enter player1 name:")
    n2=prompt("Enter player2 name:")
    document.getElementById('name1').innerHTML=n1
    document.getElementById('name2').innerHTML=n2
}
function gameOfdice(){
    if(count%2==1)
    {
        var player1=Math.floor(Math.random()*((max-min)+1))+1
        document.getElementById('roll').value=player1
        p1=p1+player1
        document.getElementById('p1').value=p1
    }
    else
    {
        var player2=Math.floor(Math.random()*((max-min)+1))+1
        document.getElementById('roll').value=player2
        p2=p2+player2
        document.getElementById('p2').value=p2
    }
    count++;
    if(p1>= total)
    {
        document.getElementById('res').innerHTML=n1 + " is the Winner!";
    }
    else if(p2>= total)
    {
        document.getElementById('res').innerHTML=n2 + " is the Winner!";
    }
    else if(p1>=total && p2>=total)
    {
        document.getElementById('res').innerHTML="Match Draw!!";
    }
}