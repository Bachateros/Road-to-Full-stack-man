import Autobot from "./Autobot.js";
import Deceptikon from "./Deceptikon.js";
import Weapon from "./Weapon.js";
import Subject from "./Observer.js";

export default class State{
    static init(){
        // 5. Создать 1 автобота с именем `OptimusPrime` с оружием, имеющим характеристики `{ damage: 100, speed: 1000 }`
        this.autobot = new Autobot('OptimusPrime', new Weapon(100, 1000));
        // 6. Создать 1 десептикона с именем `Megatron` и показателем здоровья `10000`
        this.desiptikon = new Deceptikon('Megatron', 10000);
        this.autobotCount = 0;
        this.enemyCount = 0;
        this.observable = new Subject();
        this.observable.subscribe(this.desiptikon);
        this.observable.subscribe(this.autobot);
        // this.enemy = {};
    }
    static setEnemyCount(desiptocon=1, dezertir=0){
        this.enemyCount = desiptocon + dezertir;
    }
    static getEnemyCount(){
        return this.enemyCount;
    }

    static setAutobotCount(autobot){
        this.autobotCount = autobot;
    }

    static getAutobotCount(){
        return this.autobotCount;
    }
    static getAutobot(){
        return this.autobot;
    }
    static getEnemy(){
        return this.desiptikon;
    }

    static getAutobotSide(){
        return document.querySelector('.arena-side-1');
    }
    static getDeceptikonSide(){
        return document.querySelector('.arena-side-2');
    }

    static getAutobotModel(health){
        return `<div class="bot"><span>${health} hp</span></div>`;
    }
    static getDeceptikonModel(health){
        return `
        <div class="bot">
        <span>${health} hp</span>
        </div>`;
    }
    
    static getFirstAutobot(){
        return this.getAutobotSide().firstElementChild//.match(/\d+/)[0];
    }
    static getFirstDeseptikon(){
        
        return this.getDeceptikonSide().firstElementChild//.match(/\d+/)[0];
    }
    static getFirstAutobotHealth(){
        return this.getAutobotSide().firstElementChild.querySelector('span').textContent//.match(/\d+/)[0];
    }
    static getFirstEnemyHealth(){
        return this.getDeceptikonSide().firstElementChild.querySelector('span').textContent//.match(/\d+/)[0];
    }

    static setFirstAutobotHealth(value){
        this.autobot.health = value;
        console.log(this.autobot.health)
    }
    static setFirstEnemyHealth(value){
        this.desiptikon.health = value
    }

}