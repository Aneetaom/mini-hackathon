
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {

  voices = window.speechSynthesis.getVoices();

  const speech = new SpeechSynthesisUtterance();

  speech.voice = voices[0];

  voices.forEach((voice, i) => {

    const option = document.createElement("option");

    option.textContent = voice.name;

    option.value = i;

    voiceSelect.appendChild(option);

  });
};

voiceSelect.addEventListener("change", () =>{

    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{

    speech.text = document.querySelector("textarea").value;

    window.speechSynthesis.speak(speech);

});