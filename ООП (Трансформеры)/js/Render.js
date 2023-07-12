import State from "./State.js";
import Strategy from "./Strategy.js";

export default class Render{
    static rend(){
        for(let i = 0; i < State.getAutobotCount(); i++ ){
            State.getAutobotSide().insertAdjacentHTML('afterbegin', State.getAutobotModel(State.autobot.health));
        }
        for(let i = 0; i < State.getEnemyCount(); i++){
            State.getDeceptikonSide().insertAdjacentHTML('afterbegin', State.getDeceptikonModel(State.desiptikon.health));
        }
    }
    static rerend(){
        if((State.getFirstDeseptikon() || State.getFirstDeseptikon())){
            State.getFirstAutobot().querySelector('span').textContent = `${State.autobot.health} hp`;
            State.getFirstDeseptikon().querySelector('span').textContent = `${State.desiptikon.health} hp`;
        }
    }

    
    static desiptikonStep = setTimeout(function step(){
        Strategy.fight();
        State.observable.checkChanges();
        this.desiptikonStep = setTimeout(step, State.desiptikon.attack().speed / 8);
        if(!(State.getFirstDeseptikon() || State.getFirstDeseptikon())){
            clearTimeout(desiptikonStep);
        }
        
    }, 1000);//делю для ускорения анимации
    
    // static autobotsStep = setTimeout(() => {

    //     if(isDesiptikonDead()){
    //         clearArenFromDead();
    //         clearInterval(autobotsStep);
    //         clearInterval(desiptikonStep);
    //     }
    //     if(autobotArena.firstChild === null){
    //         setTimeout(autobotsStep);
    //     }
    
    // }, autobot.attack().speed/8);//делю для ускорения анимации
}