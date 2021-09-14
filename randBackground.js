window.addEventListener("load", function(){

    const body = document.querySelector('body');
    const nameRandColour = document.querySelector('.nameOfRandColour');

    function getRandNum() {
        return Math.floor(Math.random() * 255 - 0);
    }

    document.querySelector('.randomColourButton').addEventListener("click", () => {
        let getRandColor = `rgb(${getRandNum()}, ${getRandNum()}, ${getRandNum()})`;
        body.style.backgroundColor = getRandColor;
        nameRandColour.innerText = getRandColor;
    })
});