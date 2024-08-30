const button = document.getElementById('getHoroscope');
const zodiacInput = document.getElementById('zodiacSign');
const horoscopeResult = document.getElementById('horoscopeResult');
const yearsold = document.getElementById('yearsold');

button.addEventListener('click', function() {
    const zodiacSign = zodiacInput.value.toLowerCase();
    let horoscopeMessage;

    
    switch (zodiacSign) {
        case 'aries':
            if (yearsold.value < 18) {
                alert("Eres menor de edad y tu signo es Aries.");
                horoscopeMessage = ''; 
            } else {
                horoscopeMessage = "Hoy es un buen día para tomar decisiones importantes.";
            }
            break;           
        case 'tauro':
            horoscopeMessage = "Te espera una sorpresa agradable.";
            break;
        case 'geminis':
        case 'géminis':
            horoscopeMessage = "Hoy es un día perfecto para comunicarte con viejos amigos.";
            break;
        case 'cancer':
        case 'cáncer':
            horoscopeMessage = "Es un buen día para concentrarte en tus proyectos personales.";
            break;
        case 'leo':
            horoscopeMessage = "La energía positiva te rodea. Aprovecha este momento.";
            break;
        case 'virgo':
            horoscopeMessage = "Podrías encontrar una oportunidad interesante en el trabajo.";
            break;
        case 'libra':
            horoscopeMessage = "Hoy es un buen día para el amor y la amistad.";
            break;
        case 'escorpio':
            horoscopeMessage = "Tu intuición está más fuerte que nunca. Confía en ella.";
            break;
        case 'sagitario':
            horoscopeMessage = "Una aventura inesperada podría estar en tu camino.";
            break;
        case 'capricornio':
            horoscopeMessage = "Es un buen momento para organizar tus finanzas.";
            break;
        case 'acuario':
            horoscopeMessage = "Podrías recibir buenas noticias sobre algo que esperabas.";
            break;
        case 'piscis':
            horoscopeMessage = "Hoy es un buen día para relajarte y cuidar de ti mismo.";
            break;
        default:
            horoscopeMessage = "Por favor, introduce un signo zodiacal válido.";
    }
    
    // Solo mostrar el mensaje si está definido
    if (horoscopeMessage) {
        horoscopeResult.textContent = horoscopeMessage;
    } else {
        horoscopeResult.textContent = '';
    }
});
