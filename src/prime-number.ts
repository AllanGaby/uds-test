export class PrimeNumber {
    isPrime(number: number): Boolean {
        for(let index: number = 2; index < number; index ++) {
            if(number%index === 0){
                return false
            }
        }
        return true
    }

    getFactorialNumber(number: number): String {
        if (number < 0){
            throw new Error('The number is negative')
        }
        if ((number <= 2) || (this.isPrime(number))){
            return number.toString()
        }
        let factorials: String = ''
        let minimal: number = 0
        while(!this.isPrime(number)){
            minimal = this.getMinimalFactory(number)
            number = number / minimal
            if(factorials){
                factorials = `${factorials} x ${minimal}`    
            }
            else{
                factorials = `${minimal}`
            }
        }
        return factorials = `${factorials} x ${number}`
    }

    getNextPrimeNumber(number: number): number {
        number ++
        while(!this.isPrime(number)){
            number ++
        }
        return number
    }

    getMinimalFactory(number: number): number {
        let minimal: number = 2
        while(number%minimal != 0){
            minimal = this.getNextPrimeNumber(minimal)
        }
        return minimal
    }
}