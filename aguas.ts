const magik = magikcraft.io;

function exaguas() {

    let me = magik.hic();

    me.setY(me.getY() + 300);
    let airType = me.getBlock().getType();
    me.setY(me.getY() - 300);

    me.setY(me.getY() - 1);
    let dirtType = me.getBlock().getType();
    me.setY(me.getY() + 1);


    let oriX = Math.floor(me.getX());
    let oriZ = Math.floor(me.getZ());
    let oriY = Math.floor(me.getY());

    let radius = 5;

    for (let x = -1 * radius; x <= radius; x+=0.5) {
        for (let z = -1 * radius; z <= radius; z+=0.5) {
            for (let y = -1 * radius; y <= radius; y+=0.5) {
                me.setX(oriX + x);
                me.setZ(oriZ + z);
                me.setY(oriY + y);
                // magik.dixit(me.toString());
                if (me.getBlock().getType().toString() === "STATIONARY_WATER") {
                    me.getBlock().setType(airType);
                    // if (x === radius || x === -1 * radius
                    //     || z === radius || z === -1 * radius
                    //     || y === radius || y === -1 * radius) {
                    //         me.getBlock().setType(dirtType);
                    //     } else {
                    //         me.getBlock().setType(airType);

                    //     }

                }
            }
        }
    }
    magik.dixit("Ex Aguas!");

}

exaguas();