
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOver extends cc.Component {
    gotoFightScene(){
        cc.director.loadScene('fightScene');
    }

    exitGame(){
        cc.game.end();
    }

}
