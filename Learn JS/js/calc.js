'use strict';

let calculator = {
    read() {
        this.first = +prompt('Введите первое число',0);
        this.second = +prompt('Введите второе число',0);
    },
    sum(){
        return this.first + this.second;
    },
    mul(){
        return this.first * this.second;
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());