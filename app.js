const button = document.getElementById('my-button');
const rootBtn = document.getElementById('root-btn');
const baseInput = document.getElementById('base');
const powInput = document.getElementById('pow');
const resultSpan = document.getElementById('result');

const slave = new Worker("./worker.js");
slave.onmessage = (message) => {
    console.log('sono app e ho ricevuto un messaggio da worker js', message.data)
    const result = message.data;
    resultSpan.innerHTML = result;
}

button.addEventListener('click', calculatePow);

function calculatePow(){
    const base = baseInput.value;
    const pow = powInput.value;

    const message = {
        base:base,
        pow:pow,
        operation:'pow'
    }

    console.log('sono app e sto inviando un messaggio a worker js', message)
    slave.postMessage(message);

}

rootBtn.addEventListener('click', calculateRoot)

function calculateRoot(){
    const base = baseInput.value;
    const pow = powInput.value;

    const message = {
        base:base,
        pow:pow,
        operation:'root'
    }

    console.log('sono app e sto inviando un messaggio a worker js', message)
    slave.postMessage(message);

}