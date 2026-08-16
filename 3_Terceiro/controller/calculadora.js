//-- arquivo: controller/calculadora.js
const somar = (request, res) => (async () =>{
    const valor1 = request.body.num1
    const valor2 = request.body.num2
    res.json({ status: "ok", "resultado": (valor1 + valor2) });
} )();

const subtrair = (request, res) => (async () =>{
    const valor1 = request.body.num1
    const valor2 = request.body.num2
    res.json({ status: "ok", "resultado": (valor1 - valor2) });
} )();

const multiplicar = (request, res) => (async () =>{
    const valor1 = request.body.num1
    const valor2 = request.body.num2
    res.json({ status: "ok", "resultado": (valor1 * valor2) });
} )();

const dividir = (request, res) => (async () =>{
    const valor1 = request.body.num1
    const valor2 = request.body.num2
    res.json({ status: "ok", "resultado": (valor1 / valor2) });
} )();

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
}
