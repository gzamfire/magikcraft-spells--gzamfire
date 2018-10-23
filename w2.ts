const magik = magikcraft.io;

function wall2() {
    let me = magik.hic();
    me.setY(me.getY() - 1);
    let original = magik.getPlugin().getServer().getWorlds()[0].getBlockAt(me).getType();

    const Material = magik.type('Material');

    let targetType = Material.GLASS;

    let xD = 5;
    // yD range 0 to 5 (height of wall)
    // zD range -5 to 5 (width of wall)

    for (let yD = 0; yD <= 5; yD++) {
                
        for (let zD = -5; zD <= 5; zD++) {
            
            let me = magik.hic();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }

    xD = -5;
    // yD range 0 to 5 (height of wall)
    // zD range -5 to 5 (width of wall)

    for (let yD = 0; yD <= 5; yD++) {
                
        for (let zD = -5; zD <= 5; zD++) {
            
            let me = magik.hic();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }

    let zD = -5;
    // yD range 0 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    for (let yD = 0; yD <= 5; yD++) {
                
        for (let xD = -5; xD <= 5; xD++) {
            
            let me = magik.hic();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }

    zD = 5;
    // yD range 0 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    for (let yD = 0; yD <= 5; yD++) {
                
        for (let xD = -5; xD <= 5; xD++) {
            
            let me = magik.hic();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }


    /* BUILD THE ROOF */

    let yD = 5;
    // zD range -5 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    for (let zD = -5; zD <= 5; zD++) {
                
        for (let xD = -5; xD <= 5; xD++) {
            
            let me = magik.hic();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
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