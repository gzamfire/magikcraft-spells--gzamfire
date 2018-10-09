const magik = magikcraft.io;

function getDistance(p1, p2) {
    let x1 = p1.getX(), x2 = p2.getX();
    let y1 = p1.getY(), y2 = p2.getY();

    let xDelta = Math.pow(x1 - x2, 2);
    let yDelta = Math.pow(y1 - y2, 2);

    let dist = Math.sqrt(xDelta + yDelta);
}

function lightning() {

    // let lightningSpots = [];
    // for (var i = 0; i < 100; i++) {
    //     let origin = magik.hic();
    //     let me = magik.hic();

    //     let randXDelta = 0, randZDelta = 0;
        
    //     for (var i = 0; i < 50; i++) {
    //         while (getDistance(me, origin) > 15 || getDistance(me, origin) < 10) {
    //             me = magik.hic();
    //             let meX = me.getX(), meZ = me.getZ();

    //             randXDelta = magik.random(-100,100);
    //             randZDelta = magik.random(-100,100);

    //             me.setX(meX + randXDelta);
    //             me.setZ(meZ + randZDelta);
    //         }
            
    //         magik.shakti(me);
    //     }
        

    // }

    
}

lightning();