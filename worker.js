

this.onmessage = (message) => {
    console.log('sono worker e ho ricevuto messaggio da app js', message.data)

    const operation = message.data.operation;

    const base = message.data.base;
    const pow = message.data.pow

    let result;

    if (operation === 'pow') {
        result = calcPow(base, pow);
    } else {
        result = calcRoot(base, pow);
    }

    
    setTimeout(() => {
        console.log('sono worker e sto inviando un messaggio ad app js', result)
        this.postMessage(result);
    }, 5000);


}


function calcPow(base, pow){
    
    let result = 1;
    
    for (let i = 0; i < pow; i++) {
        result *= base;
    }

    return result;
}

function calcRoot(base, pow){
    
    let result = Math.pow(base, 1/pow);
    return result;
}