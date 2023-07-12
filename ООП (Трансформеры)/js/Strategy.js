import State from "./State.js";

export default class{
    // 8. Вопрос: сколько нужно автоботов чтобы победить Мегатрона если параметр `speed` в оружии это количество милсекунд до следующего удара? Реализовать симуляцию боя.
    static #getDamageFromOneAutobot(){
        const needShootsForKillOneAutobot = State.autobot.health / State.desiptikon.attack().damage;
        const needTimeForKillOneAutobot = needShootsForKillOneAutobot * State.desiptikon.attack().speed;
        
        return needTimeForKillOneAutobot / State.autobot.attack().speed //столько выстрелов сделает автобот
                    * State.autobot.attack().damage // такой урон нанесет, за исключением!..
                    - State.desiptikon.attack().damage;//Потому что десиптикон атакует первым(ибо он плохой)
    }
    static getWinCountAutobots(){
        const damageFromOneAutobot = this.#getDamageFromOneAutobot();
        let needAutobotsForWin = 1;
    
        const summDamage = (countAutobots) =>{
            if(countAutobots === 1){
                return damageFromOneAutobot;
            } else{
                return damageFromOneAutobot * countAutobots + summDamage(countAutobots-1);
            }
        }
        //Добавить исправление на урон от нескольких врагов
        while(summDamage(needAutobotsForWin) < State.desiptikon.health * State.getEnemyCount()){
            needAutobotsForWin++;
        }
        // State.setAutobotCount(needAutobotsForWin);
        return needAutobotsForWin;
    }
    static getWinCountDeseptik(){
        return this.getWinCountAutobots() - 1;
    }

    //----------------------------------------

    //simulation fight
    static autobotsAttack(){
        const summuryDamage = State.autobot.attack().damage * State.getAutobotCount();
        State.desiptikon.health -= summuryDamage;
    }
    static desiptikonAttack(){
        State.autobot.health -= State.desiptikon.attack().damage;
    }
    static isAutobotDead = () =>{
        return State.autobot.health <= 0;
    }
    static isDesiptikonDead = () =>{
        return State.desiptikon.health <= 0;
    }
    static clearArenFromDead = () =>{
        if(this.isAutobotDead()){
            State.autobot.health = 100;
            if(State.getFirstAutobot()){//если еще есть автоботы
                State.getFirstAutobot().remove();//труп убираем
                State.setAutobotCount(State.getAutobotCount() - 1)
                //firstAutobotHealth = autobotArena.firstChild.querySelector('span');//новую цель атаки десиптикона выбираем
            }
        } else if(this.isDesiptikonDead()){
            //State.desiptikon.health = 10000
            State.getFirstDeseptikon().remove();
        }
    }
    static fight(){
        this.desiptikonAttack();
        this.autobotsAttack();
        if(this.isAutobotDead() || this.isDesiptikonDead()){
            this.clearArenFromDead();
        }
        console.log(State.desiptikon);
    }
    /*
    static desiptikonStep = setInterval(() => {
        desiptikonAttack();
    
        if(isAutobotDead()){
            clearArenFromDead();
        }
        if(!desiptikonArena.firstChild){
            clearInterval(desiptikonStep);
        }
    
    }, desiptikon.attack().speed/8);//делю для ускорения анимации
    
    static autobotsStep = setInterval(() => {
        const autobotsOnAren = autobotArena.children.length;
        autobotsAttack(autobotsOnAren);
    
        if(isDesiptikonDead()){
            clearArenFromDead();
            clearInterval(autobotsStep);
            clearInterval(desiptikonStep);
        }
        if(autobotArena.firstChild === null){
            clearInterval(autobotsStep);
        }
    
    }, autobot.attack().speed/8);//делю для ускорения анимации
    */
}