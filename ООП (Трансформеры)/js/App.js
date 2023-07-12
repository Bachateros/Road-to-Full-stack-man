//Попытка сделать из спагетти конфетку
import State from "./State.js";
import Render from "./Render.js";
import Strategy from "./Strategy.js";

class App{
    // static setEnemy(desip, dezAutobot){
    //     State.setEnemy(desip, dezAutobot);
    // }
    static start(){ 
        State.init();
        State.setEnemyCount();
        State.setAutobotCount(Strategy.getWinCountAutobots());
        Render.rend(State);
        // State.setFirstAutobotHealth(10)
        // console.log(State.desiptikon.health);
        Strategy.fight();
        Render.rerend();
    }
}
// App.setEnemy(1,0);
App.start();
