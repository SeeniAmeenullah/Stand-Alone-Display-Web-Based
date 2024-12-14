const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning ");
    }

    else if(hr == 12) {
        speak("Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating my connections");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
   

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello seeni boss";
        speech.text = finalText;
    }



    else if(message.includes('how are you')) {
        const finalText = "I am fine tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('who is your boss')) {
        const finalText = "my boss name is seeni ameenullah whos is  m d of seeni tech private limited";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is stand alone mechine";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }



    else if(message.includes('open canteen')) {
        window.open("index.html");
        const finalText = "Opening Syed Ammal canteen";
        speech.text = finalText;
    }
    else if(message.includes('open library')) {
        window.open("t.html");
        const finalText = "Opening Syed Ammal library";
        speech.text = finalText;
    }

    
    else if(message.includes('open transport')) {
        window.open("transpport2.html");
        const finalText = "Opening Syed Ammal transport system";
        speech.text = finalText;
    }


   



    


    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')                                                                                                                                                                                              
        const finalText = "Opening Calculator";
        speech.text = finalText;
    
} 
 speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}