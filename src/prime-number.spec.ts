import { PrimeNumber } from './prime-number'

interface sutTypes {
    sut: PrimeNumber
}

const makeSut = (): sutTypes => {
    return {
        sut: new PrimeNumber()
    }
}

describe('PrimeNumber', () => {
    describe('isPrime Method', () => {
        test('Should return true if 3 is provide', () => {
            const { sut } = makeSut()
            expect(sut.isPrime(3)).toBeTruthy()
        })

        test('Should return false if 4 is provide', () => {
            const { sut } = makeSut()
            expect(sut.isPrime(4)).toBeFalsy()
        })

        test('Should return false if 9 is provide', () => {
            const { sut } = makeSut()
            expect(sut.isPrime(9)).toBeFalsy()
        })

        test('Should return true if 11 is provide', () => {
            const { sut } = makeSut()
            expect(sut.isPrime(11)).toBeTruthy()
        })
    })

    describe('getNextPrimeNumber Method', () => {
        test('Should return 3 to 2 is provide', () => {
            const { sut } = makeSut()
            const next = sut.getNextPrimeNumber(2)
            expect(next).toBe(3)
        })

        test('Should return 5 if 3 is provide', () => {
            const { sut } = makeSut()
            const next = sut.getNextPrimeNumber(3)
            expect(next).toBe(5)
        })

        test('Should return 7 if 5 is provide', () => {
            const { sut } = makeSut()
            const next = sut.getNextPrimeNumber(5)
            expect(next).toBe(7)
        })

        test('Should return 11 if 7 is provide', () => {
            const { sut } = makeSut()
            const next = sut.getNextPrimeNumber(7)
            expect(next).toBe(11)
        })
    })

    describe('getFactorialNumber Method', () => {
        test('Should return 2 x 3 if 3 is provide', () => {
            const { sut } = makeSut()
            const factorials = sut.getFactorialNumber(6)
            expect(factorials).toBe('2 x 3')
        })

        test('Should return 2 x 2 x 5 x 5 if 100 is provide', () => {
            const { sut } = makeSut()
            const factorials = sut.getFactorialNumber(100)
            expect(factorials).toBe('2 x 2 x 5 x 5')
        })

        test('Should return 2 x 2 x 3 x 23 if 276 is provide', () => {
            const { sut } = makeSut()
            const factorials = sut.getFactorialNumber(276)
            expect(factorials).toBe('2 x 2 x 3 x 23')
        })
    })
})