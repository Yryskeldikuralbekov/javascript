const imya = prompt('Как вас зовут?')
console.log("Привет! " + imya)

const mass = [5,3,2,5]
const mass2 = [4,9,6,6,8,10,13]
if (mass.length > mass2.length) {
    console.log( 'mass < mass2')
    } else if (mass.length < mass2.length) {
    console.log('mass > mass2')
    } else {
        console.log('mass === mass2')
    }

const color = prompt("задайте свет");
switch (color) {
    case 'green':
        console.log('green');
        break;
    case 'red' :
        console.log('red');
        break;
    case 'yellow' :
        console.log('Yellow');
        break;
    default:
        console.log('Неправильный цвет')
}
// const arr = ["Aydana", true, false, 5]
// arr.findIndex(i => i == 5)
// console.log(arr)