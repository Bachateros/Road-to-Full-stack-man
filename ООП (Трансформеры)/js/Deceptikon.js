import Transformer from "./Transformer.js";

export default class Deceptikon extends Transformer{
    constructor(name, health){
        super(name, health);
    }
    attack(){
        return {
            'damage': 5, // урон
            'speed': 1000 // скорость атаки в мс
        }
    }
}