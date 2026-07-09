// ============================================
// WAIT FOR PAGE TO LOAD
// ============================================

window.addEventListener("DOMContentLoaded", () => {

    // ---------------- Loader ----------------

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1800);

    // ---------------- Cursor ----------------

    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    // ---------------- Music ----------------

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if (playing) {

            music.pause();
            playing = false;
            musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';

        } else {

            music.play();
            playing = true;
            musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

        }

    });

    // ---------------- Start Button ----------------

    document.getElementById("startBtn").addEventListener("click", () => {

        music.play();

        playing = true;

        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

        document.querySelector(".countdown").scrollIntoView({

            behavior: "smooth"

        });

    });

    // ---------------- Typewriter ----------------

    const text =
        "May your life always be filled with happiness, love, laughter and unforgettable memories. Happy Birthday ❤️";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            document.getElementById("typingText").innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();

    // ---------------- Countdown ----------------

    const birthday = new Date(2026, 6, 10, 0, 0, 0).getTime();

    const timer = setInterval(() => {

        const now = new Date().getTime();

        const distance = birthday - now;

        if (distance <= 0) {

            clearInterval(timer);

            document.querySelector(".timer").innerHTML =
                "<h1>🎉 Happy Birthday ❤️</h1>";

            confetti();

            return;

        }

        document.getElementById("days").textContent =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        document.getElementById("hours").textContent =
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById("minutes").textContent =
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("seconds").textContent =
            Math.floor((distance % (1000 * 60)) / 1000);

    }, 1000);

    // ---------------- Gift Popup ----------------

    const popup = document.getElementById("popup");

    document.getElementById("giftBox").addEventListener("click", () => {

        popup.style.display = "flex";

        confetti();

    });

    document.getElementById("closePopup").addEventListener("click", () => {

        popup.style.display = "none";

    });

    // ---------------- Cake ----------------

    const cake = document.getElementById("birthdayCake");

    cake.addEventListener("click", () => {

        cake.style.transform = "scale(1.15) rotate(10deg)";

        confetti();

        setTimeout(() => {

            cake.style.transform = "scale(1)";

        }, 500);

    });

    // ---------------- Scroll Reveal ----------------

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    });

    document.querySelectorAll("section").forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(70px)";
        section.style.transition = "1s";

        observer.observe(section);

    });

    // ---------------- Gallery ----------------

    document.querySelectorAll(".galleryGrid img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    // ---------------- Floating Hearts ----------------

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-50px";
        heart.style.fontSize = "25px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "8s linear";
        heart.style.zIndex = "-1";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform = "translateY(-120vh)";
            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {

            heart.remove();

        }, 8000);

    }, 700);

});

// ============================================
// CONFETTI
// ============================================

function confetti() {

    for (let i = 0; i < 120; i++) {

        const c = document.createElement("div");

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-20px";
        c.style.width = "10px";
        c.style.height = "10px";
        c.style.borderRadius = "50%";
        c.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        c.style.pointerEvents = "none";
        c.style.transition = "4s linear";
        c.style.zIndex = "9999";

        document.body.appendChild(c);

        setTimeout(() => {

            c.style.transform = "translateY(110vh)";
            c.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            c.remove();

        }, 4000);

    }

}