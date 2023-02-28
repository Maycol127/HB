setTimeout(CambioMsj, 3000)
setTimeout(CambioImg, 2500);
setTimeout(Happy, 3000);

function CambioMsj(){
    document.getElementById("loading-msg").innerText = "🥳 ¡Felicidades! 🎉";
}
function CambioImg(){
    pic = "Tierno Chícharo Cumpleaños Tarjeta.gif"
    document.getElementById('change-img').src = pic;
}
function Happy(){
    document.querySelector('#congrats').style.display = "block";
}

setTimeout(function (){
    alert("🎁¡Los mejores éxitos Ivette y Odette!🎊")
}, 3100)

const jsConfetti = new JSConfetti();

    async function confettiFY(){
        await jsConfetti.addConfetti({
                emojis: ['🎉', '🎂', '🎊', '✨', '🎁', '🥳'],
                confettiRadius: 6,
                emojiSize: 20,
                confettiNumber: 200,
                });
            }
            document.querySelector("#congrats").addEventListener
            ("click",confettiFY);