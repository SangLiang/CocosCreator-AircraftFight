const { ccclass, property } = cc._decorator;

@ccclass
export default class Weapon extends cc.Component {
    @property(cc.Prefab)
    bullet: any = null;

    protected buildTime = 0.5;

    onLoad() {
        this.schedule(this.shoot, this.buildTime);
    }
    shoot() {
        var bullet: cc.Node = cc.instantiate(this.bullet);
        bullet.setParent(cc.find('Canvas'));
        var _position = this.node.parent.parent.position;
        bullet.setPosition(_position);
    }
}
