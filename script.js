const todayDate = new Date();
const lastVisitedDate = new Date(loadGDPRDate())
const hours = Math.abs(lastVisitedDate - todayDate) / 36e5;
console.log(hours)

if(!hours || hours > 24){
    showGDPRconsent()
}

const buttons = document.querySelector('.button-group');

buttons.addEventListener("click", function (ev) {
    if(ev.target.classList.contains('save-date')) {
        hideGDPRconsent()
        saveGDPRDate(todayDate);
        saveGDPRAnswer(ev.target.value)
    }
})

function showGDPRconsent() {
    document.getElementById("GDPR-alert").hidden = false;
    document.querySelector("article").classList.add("blured");
    document.body.style.overflowY = "hidden";
}
function hideGDPRconsent() {
    document.getElementById("GDPR-alert").hidden = true;;
    document.querySelector("article").classList.remove("blured");
    document.body.style.overflowY = "";
}
function saveGDPRAnswer(d) {
    localStorage.setItem('GDPRAlertAnswer', d);
} 
function saveGDPRDate(d) {
    localStorage.setItem('GDPRAlertDate', d);
}
function loadGDPRDate(){
    if(localStorage.getItem('GDPRAlertDate') != null){
        return localStorage.getItem('GDPRAlertDate');
    }
}
