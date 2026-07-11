const settingIcon = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const dobButton = document.getElementById("dobButton");
const dobInput = document.getElementById("dobInput");

const initialText = document.getElementById("initialText");
const afterDOBBtnTxt = document.getElementById("afterDOBBtnTxt");

settingIcon.addEventListener("click", () => {
    settingContent.classList.toggle("hide");
});

dobButton.addEventListener("click", () => {

    if (dobInput.value === "") {
        alert("Please Select Date of Birth");
        return;
    }

    localStorage.setItem("dob", dobInput.value);

    initialText.classList.add("hide");
    afterDOBBtnTxt.classList.remove("hide");

    startTimer();
});

function startTimer() {

    const dob = new Date(localStorage.getItem("dob"));

    function updateAge() {

        const now = new Date();

        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            days += 30;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const diff = now - dob;

        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        document.getElementById("year").innerText = years;
        document.getElementById("month").innerText = months;
        document.getElementById("day").innerText = days;
        document.getElementById("hour").innerText = hours;
        document.getElementById("minute").innerText = minutes;
        document.getElementById("second").innerText = seconds;

    }

    updateAge();

    setInterval(updateAge, 1000);

}

window.onload = () => {

    const savedDOB = localStorage.getItem("dob");

    if (savedDOB) {

        initialText.classList.add("hide");
        afterDOBBtnTxt.classList.remove("hide");

        startTimer();
    }

};