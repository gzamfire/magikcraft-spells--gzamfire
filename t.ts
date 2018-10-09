const magik = magikcraft.io;

function t() {
    let me = magik.hic();
    me.setY(me.getY() - 1);
    let original = magik.getPlugin().getServer().getWorlds()[0].getBlockAt(me).getType();

    // me.setY(me.getY() + 1);

    // me.setX(me.getX() + 5);
    // me.setZ(me.getZ() + 5);

    for (let yD = 0; yD < 5; yD++) {

        for (let xD = -5; xD < 5; xD++) {
            
            for (let zD = -5; zD <= 5; zD += 10) {
                
                let me = magik.hic();
                me.setX(me.getX() + xD);
                me.setY(me.getY() + yD);
                me.setZ(me.getZ() + zD);

                me.getBlock().setType(original);

            }

        }

    }

    // me.getBlock().setType(original);


    // magik.
}

t();