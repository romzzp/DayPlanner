//created two empty variables where the date and the time will be store using moment.js and to make it a dynamic time setinterval is used.
var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});
// declaring the moment as time variable for the function to color coded time slots, so if the times is present then color for that time slot will be .present from .css and so on.
var time = moment();

function dayScheduler() {
    thisHour = time.hours();
    $(".timeSlot").each(function () {
        var workHour = parseInt($(this).attr("id"));
        if (workHour > thisHour) {
            $(this).addClass("future")
        }
        else if (workHour === thisHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
dayScheduler();
// this function recalls the work from the localstorage even if the page is refreshed 
function saveWork() {
    $(".timeSlot").each(function () {
        var id = $(this).attr("id");
        var work = localStorage.getItem(id);
        if (work !== null) {
            $(this).children(".work").val(work);
        }
    });
}
saveWork();
// this function is used for the savebtn, when the savebtn is clicked, it will grab the (id) as time and string of the (work) and save it to the local storage
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var work = $(this).siblings(".work").val();
    localStorage.setItem(time, work);
});
// this function is used for clearbtn if the clear button is clicked then the local storage will be cleared.
var clearBtn = $(".clearBtn");
clearBtn.on("click", function () {
    localStorage.clear();
});