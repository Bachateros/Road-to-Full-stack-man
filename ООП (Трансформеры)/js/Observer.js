import Render from "./Render.js";
import State from "./State.js";

export default class Subject{
    constructor() {
        this.subscribers = [];
    }
    isChange(newEl){
        if(newEl.health != this.autobot || newEl.health != this.desiptikon){
            return true;
        } else {
            return false;
        }
    }
    checkChanges(){
        this.subscribers.forEach( el => {
            if( this.isChange(el) ){
                this.notifyAll();
            }
        })
    }

    notifyAll() {
        Render.rerend();
        // return this.actions.forEach( subs => subs.inform(this) );
    }

    subscribe(observer) {
        this.subscribers.push(observer);
        this[observer] = observer;
    }
}

// const autoNews = new Subject();

// autoNews.register(new Observer());

// autoNews.setNews('lorem5');


// class Observer{
//     inform(message) {
//         console.log(`Jack has been informed about: ${message.news}`);
//     }
//     rerand(){
//         Render.rend();
//     }
// }
/*
    class Jack{
        inform(message) {
            console.log(`Jack has been informed about: ${message.news}`);
        }
    }
*/