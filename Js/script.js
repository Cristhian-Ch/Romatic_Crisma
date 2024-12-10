document.getElementById('btn').addEventListener('click', () => {
    // Oculta la primera sección y muestra la segunda
    document.getElementById('s1').classList.remove('active');
    document.getElementById('s1').classList.add('desactivado');
    document.getElementById('s2').classList.remove('desactivado');
    document.getElementById('s2').classList.add('active');

    const audio = document.getElementById('myAudio');
    audio.volume = 1.0;
    audio.play();
    mostrarLetrasRomanticas();
});

const letrasConfigRomantico = [
    { palabras: ["Sé que te fallé, y eso me duele tanto 💔"], tiempo: 1100 },
    { palabras: ["No hay excusas para mi error", "y lamento profundamente haberte herido 😞"], tiempo: 8000 },
    { palabras: ["Tú merecías todo lo bueno", "y yo te di lo contrario 😔"], tiempo: 15500 },
    { palabras: ["Te pido perdón desde lo más profundo de mi ser", "por el dolor que causé 💔"], tiempo: 23000 },
    { palabras: ["Si pudiera retroceder el tiempo", "cambiaría cada palabra y acción que te lastimó 🌿"], tiempo: 30000 },
    { palabras: ["Te amo con todo mi corazón", "y te prometo aprender de mis errores 💖"], tiempo: 39000 },
    { palabras: ["Si me das una oportunidad 🌟"], tiempo: 45000, },
    { palabras: ["Te mostraré lo mucho que valoro tu amor 🌹"], tiempo: 50500, esUltimo: true }
];  


function mostrarLetrasRomanticas() {
    letrasConfigRomantico.forEach((letraObj, index) => {
        setTimeout(() => {
            const pLetras = document.getElementById('pLetras');
            pLetras.innerHTML = ""; // Limpiar el contenido anterior
            
            // Creamos el elemento de texto con reemplazo si es necesario
            const span1 = document.createElement("span");
            let texto = letraObj.palabras.join(" ");

            // Si existe un símbolo no deseado "<", lo reemplazamos
            texto = texto.replace(/</g, '¡Atención!'); // Reemplazar el símbolo < por "¡Atención!"
            
            span1.textContent = texto; // Asignamos el texto modificado
            pLetras.appendChild(span1);

            if (letraObj.esUltimo) {
                setTimeout(() => {
                    // Oculta la segunda sección y muestra la tercera
                    document.getElementById('s2').classList.remove('active');
                    document.getElementById('s2').classList.add('desactivado');
                    document.getElementById('s3').classList.remove('desactivado');
                    document.getElementById('s3').classList.add('active');
                }, 2500); // Espera antes de mostrar la tercera sección
            }
        }, letraObj.tiempo);
    });
}
