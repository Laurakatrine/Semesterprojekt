var stage;

function init() {
    stage = new createjs.Stage(document.getElementById('canvas'));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", function (e) {
        stage.update();
    });

    //Shop is **** funtions
    //Opened();
    Closed();
    //ClosedBecause();
    //ClosedForever();
}

/*function Opened() {
    //Background
    var bg = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#D1F7FF", "#39E5FF"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 800, 400));
    stage.addChild(bg);

    //Sun
    var sunContainer = new createjs.Container();
    //Sun center
    var sunCircle = new createjs.Shape(new createjs.Graphics().beginRadialGradientFill(["#ff5", "#ffca4c"], [0, 1], 100, 100, 0, 100, 100, 60).drawCircle(100, 100, 60));
    sunCircle.x = 60;
    sunCircle.y = 25;
    sunContainer.addChild(sunCircle);

    //Sun long flare
    var longFlare = new createjs.Shape();
    longFlare.graphics.beginFill('#ff5');
    longFlare.graphics.moveTo(0, 0).lineTo(0, 40).lineTo(30, 40).lineTo(0, 0);
    longFlare.x = 100;
    longFlare.y = 100;
    sunContainer.addChild(longFlare);

    //Sun short flare
    var shortFlare = new createjs.Shape();
    shortFlare.graphics.beginFill('#ff5');
    shortFlare.graphics.moveTo(0, 0).lineTo(0, 40).lineTo(30, 40).lineTo(0, 0);
    shortFlare.x = 250;
    shortFlare.y = 150;
    sunContainer.addChild(shortFlare);

    stage.addChild(sunContainer);
}*/

function Closed() {
    //Background
    var bg = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#465c67", "#326a85"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 800, 400));
    stage.addChild(bg);

    //rainDrop
    var drops = new Array();
    for (i = 0; i < 100; i++) {
        var drop = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#444", "#fff"], [0, 1], 0, 5, 0, 20).drawRoundRect(0, 0, 2, 20, 2));
        drop.x = Math.random() * 800;;
        drop.y = -15;
        drops.push(drop);

        var dropTime = Math.floor(Math.random() * 1500) + 10;
        do {
            createjs.Tween.get(drop).to({
                y: 400
            }, dropTime).to({
                y: 0
            });
        } while (drop.y < 1);
        
        /*if (drop.y > 99) {
            createjs.Tween.get(drop).to({
                y: 0
            }, 20);
        }*/

    }

    for (j = 0; j < 100; j++) {
        stage.addChild(drops[j]);
    }

}


/*function ClosedBecause(){
     //Background
    var bg = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#D1F7FF", "#39E5FF"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 800, 400));
    stage.addChild(bg);
}*/

/*function ClosedForever(){
     //Background
    var bg = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#D1F7FF", "#39E5FF"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 800, 400));
    stage.addChild(bg);
}*/
