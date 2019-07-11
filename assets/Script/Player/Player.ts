const { ccclass, property } = cc._decorator;
import Aircraft from '../Basic/Aircraft';

@ccclass
export default class Player extends Aircraft {
    @property(cc.Node)
    weaponSloat:cc.Node = null;

    private target: cc.Vec2;

    private speed: number = 50;
    private canvas: cc.Node

    onLoad() {
        let self = this;
        this.node.zIndex = 1;
        this.target = this.node.position;
        this.canvas = cc.find('Canvas');
        this.canvas.on(cc.Node.EventType.TOUCH_MOVE, this.move, this);
    }

    onCollisionEnter(other, self) {
        var that = this;
        this.canvas.off(cc.Node.EventType.TOUCH_MOVE, this.move, this);
        this.underAttack();
        if(this.HP <=0){
            cc.director.loadScene("gameOver");
        }
    }

    move(event) {
        var self = this;
        var delta = event.touch.getDelta();

        if (self.node.x <= -270) {
            if (delta.x > 0) {
                self.node.x += delta.x;
            }
        } else if (self.node.x >= 270) {
            if (delta.x < 0) {
                self.node.x += delta.x;
            }
        } else {
            self.node.x += delta.x;
        }
        self.node.y += delta.y;

    }

}
