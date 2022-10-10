var count=0;

var availableButtons=["11", "12", "13", "21", "22", "23", "31", "32", "33"];
var player1=[];
var player2=[];

var start=true;

$(".btn").click(function(){
    var userChosenButton=$(this).attr("id");
    if(start){
        for(var i=0; i<9; i++)
        {
            if(availableButtons[i]===userChosenButton)
            {
                var audio=new Audio("Sound/Click.mp3");
                audio.play();
                removeButton(userChosenButton);
                addImg(userChosenButton);
                if(checkWinner(count) && count%2===0)
                {
                    player1Won();
                    $("h1").html("Refresh to play again");
                }
                else if(checkWinner(count) && count%2===1)
                {
                    player2Won();
                    $("h1").html("Refresh to play again");
                }   
                else if(!checkWinner(count) && count===8)
                {
                    draw();
                    $("h1").html("Refresh to play again");
                }
                count++;
                break;
            }
        }
    }
});

function addImg(chosenBtn){
    if(count%2===0)
    {
        $("."+chosenBtn).addClass("onClickCross");
        $(".Description").html("Player-2");
    }
    else
    {
        $("."+chosenBtn).addClass("onClickCircle");
        $(".Description").html("Player-1");
    }
}

function removeButton(userChosenBtn){
    for(var i=0; i<9; i++)
    {
        if(availableButtons[i]===userChosenBtn)
        {
            if(count%2===0)
            {
                player1.push(i);
            }
            else
            {
                player2.push(i);
            }
            availableButtons[i]="Null";
            break;
        }
    }
}

function checkWinner(count){
    var count1=0, count2=0, count3=0, count4=0, count5=0, count6=0, count7=0, count8=0;
    if(count%2===0)
    {
        for(var i=0; i<player1.length; i++)
        {
            if(player1[i]===0 || player1[i]===1 || player1[i]===2)
            {
                count1++;
            }
            if(player1[i]===3 || player1[i]===4 || player1[i]===5)
            {
                count2++;
            }
            if(player1[i]===6 || player1[i]===7 || player1[i]===8)
            {
                count3++;
            }
            if(player1[i]===0 || player1[i]===3 || player1[i]===6)
            {
                count4++;
            }
            if(player1[i]===1 || player1[i]===4 || player1[i]===7)
            {
                count5++;
            }
            if(player1[i]===2 || player1[i]===5 || player1[i]===8)
            {
                count6++;
            }
            if(player1[i]===0 || player1[i]===4 || player1[i]===8)
            {
                count7++;
            }
            if(player1[i]===2 || player1[i]===4 || player1[i]===6)
            {
                count8++;
            }

            if(count1===3 || count2===3 || count3===3 || count4===3 || count5===3 || count6===3 || count7===3 || count8===3)
            {
                return true;
            }
        }
    }
    else
    {
        for(var i=0; i<player2.length; i++)
        {
            if(player2[i]===0 || player2[i]===1 || player2[i]===2)
            {
                count1++;
            }
            if(player2[i]===3 || player2[i]===4 || player2[i]===5)
            {
                count2++;
            }
            if(player2[i]===6 || player2[i]===7 || player2[i]===8)
            {
                count3++;
            }
            if(player2[i]===0 || player2[i]===3 || player2[i]===6)
            {
                count4++;
            }
            if(player2[i]===1 || player2[i]===4 || player2[i]===7)
            {
                count5++;
            }
            if(player2[i]===2 || player2[i]===5 || player2[i]===8)
            {
                count6++;
            }
            if(player2[i]===0 || player2[i]===4 || player2[i]===8)
            {
                count7++;
            }
            if(player2[i]===2 || player2[i]===4 || player2[i]===6)
            {
                count8++;
            }

            if(count1===3 || count2===3 || count3===3 || count4===3 || count5===3 || count6===3 || count7===3 || count8===3)
            {
                return true;
            }
        }
    }
}

function player1Won(){
    $(".Description").html("Player-1 won");
    var audio=new Audio("Sound/GameOver.mp3");
    audio.play();
    start=false;
}

function player2Won(){
    $(".Description").html("Player-2 won");
    var audio=new Audio("Sound/GameOver.mp3");
    audio.play();
    start=false;
}

function draw(){
    $(".Description").html("Game Draw");
    var audio=new Audio("Sound/GameOver.mp3");
    audio.play();
    start=false;
}
