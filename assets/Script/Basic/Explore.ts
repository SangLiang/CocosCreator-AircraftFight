
const {ccclass, property} = cc._decorator;

@ccclass
export default class Explore extends cc.Component {

   
    start () {
        let _ani = this.getComponent(cc.Animation);
        let self = this;
        let _clipName = _ani.getClips()[0].name
        _ani.play(_clipName);
        
        _ani.on('stop',function(){
            self.node.destroy();
        })
    }

}
