const { ccclass, property } = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {
    @property(cc.Node)
    mask:cc.Node = null;

    onLoad() {
        console.log(this.mask)
        this.mask.active = true;
        this.schedule(this.hideSplash,2)
    }

    hideSplash(){
        this.mask.active = false;
    }

    sceneJump() {
        cc.director.loadScene("fightScene");
    }
}
