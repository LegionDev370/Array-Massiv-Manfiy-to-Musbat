let demo = document.querySelector("#demo");
let btn = document.querySelector("button");
const array = [3.02,-3.65,5,-9];
let newArray = [];
btn.addEventListener("click", () => {
    for(let i = 0; i < array.length; i++){
        let summ = Math.floor(Math.abs(array[i]))
        newArray.push(summ)
    }
    demo.textContent = "[" + newArray + "]";
})