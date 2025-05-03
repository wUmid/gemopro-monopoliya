
window.addEventListener("DOMContentLoaded", e => {
    var t = function() {
        const e = document.body.querySelector("#mainNav");
        e && (0 === window.scrollY ? e.classList.remove("navbar-shrink") : e.classList.add("navbar-shrink"))
    };
    t(), document.addEventListener("scroll", t), document.body.querySelector("#mainNav") && new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 74
    });
    const n = document.body.querySelector(".navbar-toggler");
    [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map(function(e) {
        e.addEventListener("click", () => {
            "none" !== window.getComputedStyle(n).display && n.click()
        })
    })
});
const scrollElements = document.querySelectorAll(".js-scroll"),
    elementInView = (e, t = 1) => {
        return e.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / t
    },
    elementOutofView = e => {
        return e.getBoundingClientRect().top > (window.innerHeight || document.documentElement.clientHeight)
    },
    displayScrollElement = e => {
        e.classList.add("scrolled")
    },
    hideScrollElement = e => {
        e.classList.remove("scrolled")
    },
    handleScrollAnimation = () => {
        scrollElements.forEach(e => {
            elementInView(e, 2.5) ? displayScrollElement(e) : elementOutofView(e) && hideScrollElement(e)
        })
    };
window.addEventListener("scroll", () => {
    scrollElements.forEach(e => {
        elementInView(e, 2.5) ? displayScrollElement(e) : elementOutofView(e) && hideScrollElement(e)
    })
});
for (var select = document.getElementById("selectCountry"), countries = new Array("Андижон", "Бухоро", "Фаргона", "Жиззах", "Хоразм", "Наманган", "Навоий", "Қашқадарё", "Қорақалпоғистон Республикаси", "Самарқанд", "Сирдарё", "Сурхандарё", "Тошкент вилояти", "Тошкент шаҳар"), i = 0; i < countries.length; i++) {
    var option = document.createElement("option"),
        txt = document.createTextNode(countries[i]);
    option.appendChild(txt), option.setAttribute("value", countries[i]), select.insertBefore(option, select.lastChild)
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('select[name="selectCountry"]').onchange = alertCountry
}, !1);
const FULL_DASH_ARRAY = 283,
    WARNING_THRESHOLD = 10,
    ALERT_THRESHOLD = 5,
    COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: 10
        },
        alert: {
            color: "red",
            threshold: 5
        }
    },
    TIME_LIMIT = 2800;
let timePassed = 0,
    timeLeft = TIME_LIMIT,
    timerInterval = null,
    remainingPathColor = COLOR_CODES.info.color;

function onTimesUp() {
    clearInterval(timerInterval)
}

function startTimerr() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1, timeLeft = TIME_LIMIT - timePassed, document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft), setCircleDasharray(), setRemainingPathColor(timeLeft), 0 === timeLeft && onTimesUp()
    }, 1e3)
}

function formatTime(e) {
    let t = e % 60;
    return t < 10 && (t = `0${t}`), `${Math.floor(e/60)}:${t}`
}

function setRemainingPathColor(e) {
    const {
        alert: t,
        warning: n,
        info: o
    } = COLOR_CODES;
    e <= t.threshold ? (document.getElementById("base-timer-path-remaining").classList.remove(n.color), document.getElementById("base-timer-path-remaining").classList.add(t.color)) : e <= n.threshold && (document.getElementById("base-timer-path-remaining").classList.remove(o.color), document.getElementById("base-timer-path-remaining").classList.add(n.color))
}

function calculateTimeFraction() {
    const e = timeLeft / TIME_LIMIT;
    return e - 1 / TIME_LIMIT * (1 - e)
}

function setCircleDasharray() {
    const e = `${(calculateTimeFraction()*FULL_DASH_ARRAY).toFixed(0)} 283`;
    document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", e)
}

function startTimer(e, t) {
    var n, o, r = e;
    setInterval(function() {
        n = parseInt(r / 60, 10), o = parseInt(r % 60, 10), n = n < 46 ? +n : n, o = o < 1 ? "0" + o : o, t.textContent = n + ":" + o, --r < 0 && (r = e)
    }, 1e3)
}
// document.getElementById("app").innerHTML = `\n\n  <span id="base-timer-label" class="base-timer__label text-danger text-center">${formatTime(timeLeft)}</span>\n\n`, startTimerr(), window.onload = function() {
//     startTimer(2760, document.querySelector("#time"))
// };
var telegram_bot_id = "7832675244:AAEk1rQNfgdyw3OqAS3lBOL3cMTLCHHmVgI"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 5338755257; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("number").value;
    message = document.getElementById("selectCountry").value;
    savol = document.getElementById("savol").value;
    message = "Ismingiz: " + u_name + "\nRaqamingiz: " + email + "\nShahar: " + message + "\nSavol: " + savol;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("selectCountry").value = "";
    document.getElementById("savol").value = "";
    return false;
};