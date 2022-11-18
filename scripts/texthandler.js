
/*
<div id="text_to_type">
    hello my name is petr
</div>

<textarea id="text_typed" placeholder="start typing here..." size="100">
</textarea>
*/

let word_counter = 0;
let letter_counter = 0;
let text_to_type = ["hello", "my", "name", "is", "petr"];
let text_typed = document.getElementById("text_typed");
//let text_typed = docuement.getElementById("originalTextInput");
//let text = document.getElementById("text_to_type");
let word = "";
let symbols = ['.', ',', '/', '-', '?', '!', '(', ')', ':', ';', '#', '@', '%'];

text_typed.addEventListener("keydown", (event) => {
    const key = event.key;
    const code = event.keyCode;
    //const right_key = text_to_type[word_counter][letter_counter];

    //space
    if ( code == 32 )
    {
        word_counter++;
        letter_counter = 0;
        //text_typed.value = "";
        //text_typed.innerHTML = text_typed.getAttribute("placeholder");
        text_typed.innerHTML = "";
        word = "";
    }

    //backspace
    else if (code == 8)
    {
        if (letter_counter > 0)
        {
            word = word.slice(0,-1);
            letter_counter--;
        }
    }

    //alphanumeric or special symbol
    else if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (symbols.includes(key)))
    {
        letter_counter++;
        word += key;

        if ( word == text_to_type[word_counter].substring(0,letter_counter))
        {
            text_typed.style.color = "green";
        }
        else
        {
            text_typed.style.color = "red";
        }
    }
});
