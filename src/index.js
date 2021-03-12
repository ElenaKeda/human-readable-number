module.exports = function toReadable (number) {
    const digits = new Map([
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety'],
    ]);

    let numTo = String(number).split('');

    if (number <= 20 || (numTo.length == 2 && number % 10 == 0)) {
        return digits.get(number);
    } 

    if (numTo.length == 2 && number % 10 != 0) {
        return `${digits.get((+numTo[0])*10)} ${digits.get(+numTo[1])}`
    }
    
    if (numTo.length == 3) {
        if (number % 100 == 0) {
            return `${digits.get(+numTo[0])} hundred`
        }
        
        else if (number % 10 == 0) {
            let index = +(numTo.splice(1).join(''));
            return `${digits.get(+numTo[0])} hundred ${digits.get(index)}`
        }
        
        else if (number % 10 != 0 && numTo[1] == 0) {
            return `${digits.get(+numTo[0])} hundred ${digits.get(+numTo[2])}`
        }
        
        else if(number%100 > 20) {

            return `${digits.get(+numTo[0])} hundred ${digits.get((+numTo[1])*10)} ${digits.get(+numTo[2])}`
        }
        else {
            return `${digits.get(+numTo[0])} hundred ${digits.get((number % 100))}`
        }
    }
}
