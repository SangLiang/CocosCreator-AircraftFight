const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    @property(cc.Prefab)
    exploreNode = null

    private attack: number = 1;
    private hp: number = 1;
    private speed: number = 400;

    public setAttack(attack: number) {
        this.attack = attack;
    }

    public getAttack() {
        return this.attack;
    }

    underAttack() {
        this.hp -= 1;
        if (this.hp <= 0) {
            this.explore();
            this.node.destroy();
        }
    }

    explore(){
        let _node =  cc.instantiate(this.exploreNode);
        _node.setParent(cc.find('Canvas'));
        _node.setPosition(this.node.position);
    }

    move(dt) {

        if(this.node.y >= 780 || this.node.y <= -800){
            this.node.destroy();
        }
        
        this.node.y += this.speed * dt;
       
    }

    onCollisionEnter(other, self) {
        this.underAttack();
    }

    update(dt) {
        this.move(dt);
    }
}
