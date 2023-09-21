const data = new Date(2019, 9, 7, 22, 52,);
const dataExercicio = formataData(data);
console.log(dataExercicio);

function formataData (data) {
const ano = data.getFullYear();
const mes = data.getMonth();
const dia = data.getDate();
let diaSemana = data.getDay();
const hora = data.getHours();
const minuto = data.getMinutes();

let diaSemanaTexto = '';

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;

        case 2:
            diaSemanaTexto = 'Terça';
            break;

        case 3:
            diaSemanaTexto = 'Quarta';
        break;

        case 4:
            diaSemanaTexto = 'Quinta';
            break;

        case 5:
            diaSemanaTexto = 'Sexta';
            break;

        case 6:
            diaSemanaTexto = 'Sábado';
            break;

        default:
            diaSemanaTexto = 'Dia inválido';
        break;
    }

    let mesTexto = '';

    switch(mes) {
        case 0:
            mesTexto = 'janeiro';
            break;
        
        case 1:
            mesTexto = 'fevereiro';
            break;

        case 2:
            mesTexto = 'março';
            break;

        case 3:
            mesTexto = 'abril';
        break;

        case 4:
            mesTexto = 'maio';
            break;

        case 5:
            mesTexto = 'junho';
            break;

        case 6:
            mesTexto = 'julho';
            break;

        case 7:
            mesTexto = 'agosto';
        break;

        case 8:
            mesTexto = 'setembro';
        break;

        case 9:
            mesTexto = 'outubro';
        break;

        case 10:
            mesTexto = 'novembro';
        break;

        case 11:
            mesTexto = 'dezembro';
        break;

        default:
            mesTexto = '';
            break;

    }



    

    
    document.querySelector('#description').innerHTML = `${diaSemanaTexto} ${dia} de ${mesTexto} de ${ano} ${hora}:${minuto}`;
}








