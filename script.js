let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");
let voiceSelect = document.querySelector("select");

let speech = new SpeechSynthesisUtterance();

let voices = [];

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice , i) => {
        voiceSelect.options[i] = new Option(voice.name , i);
    });
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
});

btn.addEventListener("click", ()=>{
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
});

