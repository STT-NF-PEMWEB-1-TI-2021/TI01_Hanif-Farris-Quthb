function convert() {
    const usd = 9915;
    const sgd = 13472;
    const ringgit = 874;
    const yen = 120;
    const euro = 15888;
    const riyal = 3592;

    if (currency.value == "usd") {
        let input = Number(document.getElementById("input").value);
        let result = input * usd;
        document.getElementById("result").value = result;
    } else if (currency.value == "sgd") {
        let input = Number(document.getElementById("input").value);
        let result = input * sgd;
        document.getElementById("result").value = result;
    } else if (currency.value == "rm") {
        let input = Number(document.getElementById("input").value);
        let result = input * ringgit;
        document.getElementById("result").value = result;
    } else if (currency.value == "yen") {
        let input = Number(document.getElementById("input").value);
        let result = input * yen;
        document.getElementById("result").value = result;
    } else if (currency.value == "euro") {
        let input = Number(document.getElementById("input").value);
        let result = input * euro;
        document.getElementById("result").value = result;
    } else if (currency.value == "riyal") {
        let input = Number(document.getElementById("input").value);
        let result = input * riyal;
        document.getElementById("result").value = result;
    }
}