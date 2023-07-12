export default class Transformer{
    constructor(name, health = 100){
        this.name = name;
        this.health = health;
    }
    attack() {
    };
    hit(weapon){
        this.health -= weapon.damage;
    }
}