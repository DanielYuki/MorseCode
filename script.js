let button = document.querySelector('.go');
let input = document.querySelector('.text');
let results = document.querySelector('#result');
let swap = document.querySelector('.arrows');

let gambiarra1 = document.querySelector('#gambiarra1');
let gambiarra2 = document.querySelector('#gambiarra2');

let textToMorse = true;

button.onclick = clean;

swap.onclick = () => {
    clean();
    if (textToMorse === true) {
        textToMorse = false;
        gambiarra1.innerHTML = 'MORSE';
        gambiarra2.innerHTML = 'TEXT';
    } else {
        textToMorse = true;
        gambiarra2.innerHTML = 'MORSE';
        gambiarra1.innerHTML = 'TEXT';
    }
}

input.onkeypress = () => {
    let word = ''
    let validador = true;
    if (textToMorse) {
        for (let i = 0; i < input.value.length; i++) {
            switch (input.value.charAt(i).toUpperCase()) {
                case 'A':
                    word += ('.- ')
                    break;
                case 'B':
                    word += ('-... ')
                    break;
                case 'C':
                    word += ('-.-. ')
                    break;
                case 'D':
                    word += ('-.. ')
                    break;
                case 'E':
                    word += ('. ')
                    break;
                case 'F':
                    word += ('..-. ')
                    break;
                case 'G':
                    word += ('--. ')
                    break;
                case 'H':
                    word += ('.... ')
                    break;
                case 'I':
                    word += ('.. ')
                    break;
                case 'J':
                    word += ('.--- ')
                    break;
                case 'K':
                    word += ('-.- ')
                    break;
                case 'L':
                    word += ('.-.. ')
                    break;
                case 'M':
                    word += ('-- ')
                    break;
                case 'N':
                    word += ('-. ')
                    break;
                case 'O':
                    word += ('--- ')
                    break;
                case 'P':
                    word += ('.--. ')
                    break;
                case 'Q':
                    word += ('--.- ')
                    break;
                case 'R':
                    word += ('.-. ')
                    break;
                case 'S':
                    word += ('... ')
                    break;
                case 'T':
                    word += ('- ')
                    break;
                case 'U':
                    word += ('..- ')
                    break;
                case 'V':
                    word += ('...- ')
                    break;
                case 'W':
                    word += ('.-- ')
                    break;
                case 'X':
                    word += ('-..- ')
                    break;
                case 'Y':
                    word += ('-.-- ')
                    break;
                case 'Z':
                    word += ('--.. ')
                    break;
                case '0':
                    word += ('----- ')
                    break;
                case '1':
                    word += ('.---- ')
                    break;
                case '2':
                    word += ('..--- ')
                    break;
                case '3':
                    word += ('...-- ')
                    break;
                case '4':
                    word += ('....- ')
                    break;
                case '5':
                    word += ('..... ')
                    break;
                case '6':
                    word += ('-.... ')
                    break;
                case '7':
                    word += ('--... ')
                    break;
                case '8':
                    word += ('---.. ')
                    break;
                case '9':
                    word += ('----. ')
                    break;
                case ' ':
                    word += ('/ ')
                    break;
                default:
                    validador = false;
            }
        }
        if (validador != true) {
            alert('Digite Apenas Números e Letras Sem acentuação')
            clean();
        } else {
            results.innerHTML = word;
        }
    } else {
        let morse = input.value.split(' ');
        for (let i = 0; i < morse.length; i++) {
            switch (morse[i]) {
                case '.-':
                    word += ('A')
                    break;
                case '-...':
                    word += ('B')
                    break;
                case '-.-.':
                    word += ('C')
                    break;
                case '-..':
                    word += ('D')
                    break;
                case '.':
                    word += ('E')
                    break;
                case '..-.':
                    word += ('F')
                    break;
                case '--.':
                    word += ('G')
                    break;
                case '....':
                    word += ('H')
                    break;
                case '..':
                    word += ('I')
                    break;
                case '.---':
                    word += ('J')
                    break;
                case '-.-':
                    word += ('K')
                    break;
                case '.-..':
                    word += ('L')
                    break;
                case '--':
                    word += ('M')
                    break;
                case '-.':
                    word += ('N')
                    break;
                case '---':
                    word += ('O')
                    break;
                case '.--.':
                    word += ('P')
                    break;
                case '--.-':
                    word += ('Q')
                    break;
                case '.-.':
                    word += ('R')
                    break;
                case '...':
                    word += ('S')
                    break;
                case '-':
                    word += ('T')
                    break;
                case '..-':
                    word += ('U')
                    break;
                case '...-':
                    word += ('V')
                    break;
                case '.--':
                    word += ('W')
                    break;
                case '-..-':
                    word += ('X')
                    break;
                case '-.--':
                    word += ('Y')
                    break;
                case '--..':
                    word += ('Z')
                    break;
                case '-----':
                    word += ('0')
                    break;
                case '.----':
                    word += ('1')
                    break;
                case '..---':
                    word += ('2')
                    break;
                case '...--':
                    word += ('3')
                    break;
                case '....-':
                    word += ('4')
                    break;
                case '.....':
                    word += ('5')
                    break;
                case '-....':
                    word += ('6')
                    break;
                case '--...':
                    word += ('7')
                    break;
                case '---..':
                    word += ('8')
                    break;
                case '----.':
                    word += ('9')
                    break;
                case '/':
                    word += (' ')
                    break;
                case ' ':
                    break;
                case '':
                    break;
                default:
                    validador = false;
            }if (validador != true) {
                alert('Digite Apenas Pontos e Traços ("." "-" "/")\n Ou Digite Certo')
                clean();
            } else {
                results.innerHTML = word;
            }
        }
    }
}

function clean() {
    results.innerHTML = '';
    input.value = ''
}

//  DON'T WORK ON MOBILE...
// function copy(containerid) {
//     let textarea = document.createElement('textarea')
//     textarea.id = 'temp_element'
//     textarea.style.height = 0
//     document.body.appendChild(textarea)
//     textarea.value = document.getElementById(containerid).innerText
//     let selector = document.querySelector('#temp_element')
//     selector.select()
//     document.execCommand('copy')
//     document.body.removeChild(textarea)
// }


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () {
            console.log('Service Worker Registered');
        }, function (error) {
            console.log(error);
        });
}