let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let value = btn.innerText;
        console.log(btn);

        if (value === "C") {
            input.value = "";
        }
        else if (value === "=") {
            try {
                input.value = eval(input.value);
            }
            catch {
                input.value = 'Xatolik!';
            }
        }
        else if (btn.classList.contains("delete")) {
            input.value = value.slice(0, -1);
        }
        else {
            input.value += value;
        }
    });
});