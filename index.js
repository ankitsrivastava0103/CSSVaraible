let inputeTags = document.querySelectorAll(".controls input");

function updatePic (){
    let suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputeTags.forEach(input => input.addEventListener("change",updatePic));
inputeTags.forEach(input => input.addEventListener("mousemove",updatePic));