function  repeatHello(callback) {
    setInterval(() => callback(), 1000);
};

function sayHello() {
    console.log("Hello");
};

repeatHello(sayHello);

// Penso che il motivo per cui usiamo una arrow function in questo caso è che questo tipo di funzioni hanno una sintassi più breve e concisa, che è particolarmente utile quando si ha una funzione semplice come questa.