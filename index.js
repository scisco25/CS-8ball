//register event listener
document.getElementById('8').addEventListener('click',ask);
//get html element variable
let answerout = document.getElementById('answer');


function ask() {
    console.log('clicked');
    //get user input
    let question = document.getElementById('input').value.toLowerCase();
    let answer = "";
    console.log(question);
    //blank response
    if(question == "") {
        answer = "Please ask a question..."
    }
    else{
        //specific responses
        if(question == "does the magic eight ball work?") {answer = "Of course.";}
        else if(question == "is javascript awesome?") {answer = "Its functional."}
        else if(question == "") {answer = "Please ask a question..."}
        //send any user questioning the 8 ball to the void
        else if(question == "your fake!") {open("about:blank","_self")}
        //random responses
        else{
            //get random
            let ran = Math.random();
            //choose response based on random
            if(ran <= 0.2){answer = "Without a Doubt."}
            else if(ran <= 0.4){answer = "As I see it, yes."}
            else if(ran <= 0.6){answer = "Concentrate and ask again."}
            else if(ran <= 0.8){answer = "Don't count on it."}
            else if(ran <= 1){answer = "Outlook not so good."}
        }
    }
    //set the output
    answerout.innerHTML = answer;
}
