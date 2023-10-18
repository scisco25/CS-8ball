document.getElementById('8').addEventListener('click',ask);
let answerout = document.getElementById('answer');


function ask() {
    console.log('clicked');
    let question = document.getElementById('input').value.toLowerCase();
    let answer = "";
    console.log(question);
    //specific responses
    if(question == "") {
        answer = "Please ask a question..."
    }
    else{
        if(question == "does the magic eight ball work?") {answer = "Of course.";}
        else if(question == "is javascript awesome?") {answer = "Its functional."}
        else if(question == "") {answer = "Please ask a question..."}
        else if(question == "your fake!") {open("about:blank","_self")}
        else{
            let ran = Math.random();
            if(ran <= 0.2){answer = "Without a Doubt."}
            else if(ran <= 0.4){answer = "As I see it, yes."}
            else if(ran <= 0.6){answer = "Concentrate and ask again."}
            else if(ran <= 0.8){answer = "Don't count on it."}
            else if(ran <= 1){answer = "Outlook not so good."}
        }
    }
    answerout.innerHTML = answer;
}