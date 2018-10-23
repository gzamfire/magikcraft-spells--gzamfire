const magik = magikcraft.io;

function wall2() {
    let me = magik.hic();
    me.setY(me.getY() - 1);
    let original = magik.getPlugin().getServer().getWorlds()[0].getBlockAt(me).getType();

    let xD = 5;
    // yD range 0 to 5 (height of wall)
    // zD range -5 to 5 (width of wall)

    for (let yD = 0; yD <= 5; yD++) {
                
        for (let zD = -5; zD <= 5; zD++) {
            
            let me = magik.hic();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(original);
            // clearCount++;

        }
    }

    // if (original.toString() !== "AIR") {
    //     magik.dixit("This spell only works in the presence of air.");
    // } else {
    //     let clearCount = 0;
    //     magik.dixit("Acclario!");
    //     for (let yD = 0; yD <= 5; yD++) {

    //         for (let xD = -5; xD <= 5; xD++) {
                
    //             for (let zD = -5; zD <= 5; zD++) {
                    
    //                 let me = magik.hic();
    //                 me.setX(me.getX() + xD);
    //                 me.setY(me.getY() + yD);
    //                 me.setZ(me.getZ() + zD);

    //                 me.getBlock().setType(original);
    //                 clearCount++;

    //             }
    //         }
    //     }
    //     magik.dixit(clearCount + " blocks cleared!");

    // }
}

wall2();