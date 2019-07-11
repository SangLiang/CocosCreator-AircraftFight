const {ccclass, property} = cc._decorator;

const TOP:number = 1334;
const BOTTON:number = -1334;

@ccclass
export default class Background extends cc.Component {
    
    private speed:number = 80;

    move(dt:number){
        if(this.node.y <= BOTTON){
            this.node.y = TOP;
        }
        this.node.y -= this.speed * dt; 
    }

    start () {
        // this.move()
    }

    update (dt) {
        this.move(dt)
    }
}
