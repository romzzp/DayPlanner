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

// $(document).ready(function () {
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

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var work = $(this).siblings(".work").val();
    localStorage.setItem(time, work);
});

var clearBtn = $(".clearBtn");
clearBtn.on("click", function () {
    localStorage.clear();
});