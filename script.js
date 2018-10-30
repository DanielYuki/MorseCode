let button = document.querySelector('.go');
let input = document.querySelector('.text');
let results = document.querySelector('#result');

input.onkeypress = () => {
    let word = ''
    let validador = true;
    let textToMorse = true;
    if (textToMorse === true) {
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

    }
}

function clean() {
    results.innerHTML = '';
    input.value = ''
}

function copy(containerid) {
    let textarea = document.createElement('textarea')
    textarea.id = 'temp_element'
    textarea.style.height = 0
    document.body.appendChild(textarea)
    textarea.value = document.getElementById(containerid).innerText
    let selector = document.querySelector('#temp_element')
    selector.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () {
            console.log('Service Worker Registered');
        }, function (error) {
            console.log(error);
        });
}