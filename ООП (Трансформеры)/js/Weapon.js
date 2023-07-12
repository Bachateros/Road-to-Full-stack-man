export default class Weapon{
    constructor( damage, speed){
        this.damage = damage;
        this.speed = speed;
    }
    fight(){
        return {
            'damage': this.damage,
            'speed': this.speed
        }
    }
}