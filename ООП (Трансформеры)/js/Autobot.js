import Transformer from "./Transformer.js";

export default class Autobot extends Transformer{
    constructor(name, weapon){
        super(name);
        this.weapon = weapon;
    }
    attack(){
        return this.weapon.fight();
    }
}