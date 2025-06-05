// Quote carousel array
const quotes = [
  "Self-care is giving the world the best of you, not what's left of you.",
  "Healing takes time, and asking for help is a courageous step.",
  "Your mental health is a priority.",
  "You are stronger than you think.",
  "It's okay to not be okay."
];

// Daily Affirmations
const dailyTips = [
  "Take a deep breath and center yourself.",
  "Remember, progress not perfection.",
  "You deserve moments of peace.",
  "Kindness begins with you.",
  "Embrace the small victories today."
];

// Show rotating motivational quote in hero
let quoteIndex = 0;
const quoteEl = document.querySelector('.quote-carousel');
function showNextQuote() {
  quoteEl.textContent = quotes[quoteIndex];  //.textContent gets whatever you give as content as it understands tags as simple content whereas .innerHtml takes data as we write in html code as it understands tags as tags                   
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
// Initial quote & interval rotate every 6 sec
showNextQuote();
setInterval(showNextQuote, 6000);           //setInterval is a builtin function that allows you to repeatedly execute a specified function, with a specified delay (6000 ms or 6 sec in this case) between each execution of the function.


// Load random daily tip
const dailyTipEl = document.querySelector('.daily-tip');
function showDailyTip() {
  const tip = dailyTips[Math.floor(Math.random() * dailyTips.length)];
  dailyTipEl.textContent = tip;
}
showDailyTip();

// Light/Dark Mode Toggle
const toggleContainer = document.querySelector('.toggle-container');
const toggleSwitch = document.getElementById('mode-toggle');
toggleContainer.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('dark-mode');              //if class exists, toggle remove it and vice versa, .classlist is used to manipulate (add, del, toggle) with classes
  const isDark = document.body.classList.contains('dark-mode');
  toggleSwitch.classList.toggle('active', isDark);
});

// Floating music button logic
const musicButton = document.querySelector('.music-button');
let isPlaying = false;
let audio = new Audio('calming music.mp3');
audio.loop = true;
audio.volume = 0.99;
musicButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicButton.innerHTML = '<i class="fa-solid fa-music"></i>';
    isPlaying = false;
  } else {
    audio.play();
    musicButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
  }
});
musicButton.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    musicButton.click();
  }
});

// Newsletter form submission handler
$(document).ready(() => {
  $("#newsletter-form").on("submit", function(event) {
    event.preventDefault();             //preventDefault() is used to prevent the default action of an event from happening
    const email = $("#email-input").val().trim();      //trim() is used to remove starting and ending whitespace from a string
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      $("#email-input").focus();     //focus() is used to set the focus on an element
      return;
    }
    alert("Thank you for subscribing!");
    $("#email-input").val('');
  });
});