var today = new Date();
var monthNames = ["January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
]
var currYear = today.getFullYear();
var currMonth = monthNames[today.getMonth()];

var lastDayOfPreMon = (new Date(currYear, today.getMonth(), 0)).getDate();
var lastDayOfCurrMon = (new Date(currYear, today.getMonth() + 1, 0)).getDate();
var firstDayOfMonth = (new Date(currYear, today.getMonth(), 1)).getDay(); //return 0-6 


function thisMonthUpdate() {
    var header = document.querySelector("span");
    header.textContent = currMonth + " " + currYear;
    var dateCell = document.querySelectorAll("td");

    var currCount = 1;
    var nextCount = 1;
    for (var i = 0; i < 42; i++) {
        if (i < firstDayOfMonth) {
            dateCell[i].innerHTML = lastDayOfPreMon - firstDayOfMonth + i + 1;
        } else if (i < lastDayOfCurrMon + firstDayOfMonth) {
            dateCell[i].innerHTML = currCount;
            currCount++;
        } else {
            dateCell[i].innerHTML = nextCount;
            nextCount++;
        }
    }
}


function updateCalendar() { }

var preBtn = document.querySelector(".ui-datepicker-prev-btn");
preBtn.addEventListener("click", updateCalendar);
thisMonthUpdate()