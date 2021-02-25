const amount = document.querySelector('input#amount');
const select = document.getElementById('currency');
const result = document.querySelector('div.result');
const btn = document.querySelector('button');

function selectElem(event) {
        event.preventDefault();

    axios.get(`https://api.nbp.pl/api/exchangerates/rates/A/${select.value.toLowerCase()}/`).then(function(response) {
            let rate = response.data.rates[0].mid;
            result.innerText = (amount.value * rate).toFixed(2) + " PLN";
    })
}

btn.addEventListener('click', selectElem);
