
// 1. select all tabs from tab list.
const pomodoroTab = document.getElementById("pomodoro");
const shortBreakTab = document.getElementById("shortBreak");
const longBreakTab = document.getElementById("longBreak");

const pomodoroContentTab = document.getElementById("pomodoro-content");
const shortBreakContentTab = document.getElementById("shortBreak-content");
const longBreakContentTab = document.getElementById("longBreak-content");


// 2. add click event listener to each tab.
pomodoroTab.addEventListener("click",function(){

    // 3. remove all the active tab class from tab list.
    // 4. add active class to selected tab.

    pomodoroTab.classList.add("active");
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.remove("active");
    
    // 5. remove all activ class from tab content.
    // 6. add active class to selected tab content.

    pomodoroContentTab.classList.add("active")
    shortBreakContentTab.classList.remove("active")
    longBreakContentTab.classList.remove("active")
});
shortBreakTab.addEventListener("click",function(){
    pomodoroTab.classList.remove("active");
    shortBreakTab.classList.add("active");
    longBreakTab.classList.remove("active");
    

    pomodoroContentTab.classList.remove("active")
    shortBreakContentTab.classList.add("active")
    longBreakContentTab.classList.remove("active")

});
longBreakTab.addEventListener("click",function(){
    pomodoroTab.classList.remove("active");
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.add("active");
    

    pomodoroContentTab.classList.remove("active")
    shortBreakContentTab.classList.remove("active")
    longBreakContentTab.classList.add("active")
});
// timer to develop
function timer(seconds){
 const now = Date.now();
 const then = now + (seconds *1000);
 const timerInterval =setInterval(function(){
   const secondsLeft = Math.round((then - Date.now())/1000);
   displayTime(secondsLeft,pomodoroTime);
   displayTime(secondsLeft,shortBreakTime);
   displayTime(secondsLeft,longBreakTime);



   if(secondsLeft < 1) {
      clearInterval(timerInterval);

   }
 },1000);

};
function displayTime(seconds,element){
    const minute =Math.floor(seconds/60);
    const second = seconds%60;
    console.log({minute,second});
    element.innerText = minute + " : " + second;
}

const pomodoroTime = document.getElementById("pomodoroTime");
const shortBreakTime = document.getElementById("shortBreakTime");
const longBreakTime = document.getElementById("longBreakTime");


const pomodoroButton = document.getElementById("pomodoroButton");

pomodoroButton.addEventListener("click",function()
{
    const pomodoroTotalTime = 1500;
    timer(pomodoroTotalTime);
});

const shortBreakButton = document.getElementById("shortBreakButton");
shortBreakButton.addEventListener("click",function()
{
    const shortBreakTotalTime = 300;
    timer(shortBreakTotalTime);
});

const longBreakButton = document.getElementById("longBreakButton");
longBreakButton.addEventListener("click",function()
{
    const longBreakTotalTime = 900;
    timer(longBreakTotalTime);
});





