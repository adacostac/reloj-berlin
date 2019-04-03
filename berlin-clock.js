(function () {
    var config = {
        refreshRate: 1000
    };

    var state = {
        isSecondsVisible: false
    };

    function printDate() {
        var date = new Date();

        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        fullDate = hour + ':' + min + ':' + sec;

        document.getElementById('hora').innerHTML = fullDate;
    }

    function toggleSecondsVisibility() {
        state.isSecondsVisible = !state.isSecondsVisible;
        var seconds = document.getElementById('seconds');
        seconds.style.backgroundColor = state.isSecondsVisible ? 'yellow': 'white';
    }

    function init() {
        printDate();
    }

    function refresh() {
        setInterval(function () {
            printDate();
            toggleSecondsVisibility();
        }, config.refreshRate)
    }

    document.addEventListener('DOMContentLoaded', function () {
        init();
        refresh();
    })
})();
