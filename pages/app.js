let button = document.querySelector("#submit");
button.onclick = () => {
    let date = document.querySelector("#date").value;
    let category = document.querySelector("#Category").value;
    let Amount = document.querySelector("#Amount").value;
    let note = document.querySelector("#Note").value;
    let items = `date= ${date} Category=${category}, Amount=${Amount} amd note=${note}`;
    console.log(items);
    let product = [date, category, Amount, note];
    for (let i of product) {
        let key = prompt("Enter a key");
        localStorage.setItem(key, i);
    }
}