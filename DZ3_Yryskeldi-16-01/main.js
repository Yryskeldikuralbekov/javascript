function number( firstnum, secondnum ) {
    if( firstnum > secondnum){
        console.log(secondnum,' меньше чем ',firstnum)
    }else if(firstnum < secondnum){
        console.log(firstnum,'меньше чем' ,secondnum)
    }else {
        console.log(firstnum,'===',secondnum)
    }
}
number(54,86)

function count(str) {
    console.log(str.length)
}
const str = 'I like eat chocolate.'
count(str)
