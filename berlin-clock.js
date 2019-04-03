(function () {
    var config = {
        refreshRate: 1000
    };

    var state = {
        isSecondsVisible: false,
        elements: [
            { firstColumn: 0 },
            { secondColumn: 0, },
            { thirdColumn: 0, },
            { fourthColumn: 0 }
        ]
    };

    var date = {
        hour: 0,
        minute: 0,
        seconds: 0
    }

    function printDate() {
        var dateTime = new Date();

        date.hour = dateTime.getHours();
        date.minute = dateTime.getMinutes();
        date.seconds = dateTime.getSeconds();

        fullDate = date.hour + ':' + date.minute + ':' + date.seconds;

        document.getElementById('hora').innerHTML = fullDate;
    }

    function setDataInfo() {
        state.firstColumn = Math.trunc(date.hour / 5);
        state.secondColumn = Math.trunc(date.hour % 5);
        state.thirdColumn = Math.trunc(date.minute / 5);
        state.fourthColumn = Math.trunc(date.minute % 5);
    }

    function printFirstColumn() {
        var firstColumn = document.getElementById('firstColumn');
        if (firstColumn.hasChildNodes()) {
            var children = firstColumn.children;
            for (var i = 0; i < state.firstColumn; i++) {
                children[i].style.backgroundColor = 'red';
            }
        }
    }

    function printSecondColumn() {
        var firstColumn = document.getElementById('secondColumn');
        if (firstColumn.hasChildNodes()) {
            var children = firstColumn.children;
            for (var i = 0; i < state.secondColumn; i++) {
                children[i].style.backgroundColor = 'red';
            }
        }
    }

    function printThirdColumn() {
        var firstColumn = document.getElementById('thirdColumn');
        if (firstColumn.hasChildNodes()) {
            var children = firstColumn.children;
            for (var i = 0; i < state.thirdColumn; i++) {
                if (i === 2 || i === 5 || i === 8) {
                    children[i].style.backgroundColor = 'red';   
                } else {
                    children[i].style.backgroundColor = 'yellow';
                }
                
            }
        }
    }

    function printFourthColumn() {
        var firstColumn = document.getElementById('fourthColumn');
        if (firstColumn.hasChildNodes()) {
            var children = firstColumn.children;
            for (var i = 0; i < state.fourthColumn; i++) {
                children[i].style.backgroundColor = 'red';
            }
        }
    }

    function clearValues() {
        if (state.firstColumn === 0) {
            var firstColumn = document.getElementById('firstColumn');
            if (firstColumn.hasChildNodes()) {
                var children = firstColumn.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].style.backgroundColor = 'white';
                }
            }
        }

        if (state.secondColumn === 0) {
            var firstColumn = document.getElementById('secondColumn');
            if (firstColumn.hasChildNodes()) {
                var children = firstColumn.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].style.backgroundColor = 'white';
                }
            }
        }

        if (state.thirdColumn === 0) {
            var firstColumn = document.getElementById('thirdColumn');
            if (firstColumn.hasChildNodes()) {
                var children = firstColumn.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].style.backgroundColor = 'white';
                }
            }
        }

        if (state.fourthColumn === 0) {
            var firstColumn = document.getElementById('fourthColumn');
            if (firstColumn.hasChildNodes()) {
                var children = firstColumn.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].style.backgroundColor = 'white';
                }
            }
        }
    }

    function toggleSecondsVisibility() {
        state.isSecondsVisible = !state.isSecondsVisible;
        var seconds = document.getElementById('seconds');
        seconds.style.backgroundColor = state.isSecondsVisible ? 'yellow' : 'white';
    }

    function init() {
        printDate();
    }

    function refresh() {
        setInterval(function () {
            printDate();
            toggleSecondsVisibility();
            setDataInfo();
            printFirstColumn();
            printSecondColumn();
            printThirdColumn();
            printFourthColumn();
            clearValues();
        }, config.refreshRate)
    }

    document.addEventListener('DOMContentLoaded', function () {
        init();
        refresh();
    })
})();
