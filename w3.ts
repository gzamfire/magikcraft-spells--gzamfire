const magik = magikcraft.io;

function wall3() {
    let me = magik.aspecto();
    me.setY(me.getY() - 1);
    let original = magik.getPlugin().getServer().getWorlds()[0].getBlockAt(me).getType();

    const Material = magik.type('Material');

    let targetType = Material.GLASS;
    let air = Material.AIR;
    const roofHeight = 3;
    const floorHeight = -2;
    const wallWidth = 3;

    let xD = wallWidth;
    // yD range 0 to 5 (height of wall)
    // zD range -5 to 5 (width of wall)

    for (let yD = floorHeight; yD <= roofHeight; yD++) {
                
        for (let zD = -1 * wallWidth; zD <= wallWidth; zD++) {
            
            let me = magik.aspecto();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }

    xD = -1 * wallWidth;
    // yD range 0 to 5 (height of wall)
    // zD range -5 to 5 (width of wall)

    for (let yD = floorHeight; yD <= roofHeight; yD++) {
                
        for (let zD = -1 * wallWidth; zD <= wallWidth; zD++) {
            
            let me = magik.aspecto();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }

    let zD = -1 * wallWidth;
    // yD range 0 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    for (let yD = floorHeight; yD <= roofHeight; yD++) {
                
        for (let xD = -1 * wallWidth; xD <= wallWidth; xD++) {
            
            let me = magik.aspecto();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }

    zD = wallWidth;
    // yD range 0 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    for (let yD = floorHeight; yD <= roofHeight; yD++) {
                
        for (let xD = -1 * wallWidth; xD <= wallWidth; xD++) {
            
            let me = magik.aspecto();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }


    /* BUILD THE ROOF */

    let yD = roofHeight;
    // zD range -5 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    for (let zD = -1 * wallWidth; zD <= wallWidth; zD++) {
                
        for (let xD = -1 * wallWidth; xD <= wallWidth; xD++) {
            
            let me = magik.aspecto();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            

        }
        magik.dixit(me.getX().toString() + ", " + me.getY().toString() + ", " + me.getZ().toString())
    }

    /* BUILD THE FLOOR */

    yD = floorHeight;
    // zD range -5 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    // let floorCount = 0;
    for (let zD = -1 * wallWidth; zD <= wallWidth; zD++) {
                
        for (let xD = -1 * wallWidth; xD <= wallWidth; xD++) {
            
            let me = magik.aspecto();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;
            // floorCount++;
            
            // magik.dixit(floorCount.toString());

        }
        // magik.dixit(zD.toString());
        // magik.dixit(wallWidth.toString());
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


    // let airCount = 0;
    // yD range 0 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)
    // zD in the plane, xD in the plane
    for (yD = floorHeight + 1; yD < roofHeight; yD++) {

        for (let zD = -1 * wallWidth + 1; zD < wallWidth; zD++) {
                
            for (let xD = -1 * wallWidth + 1; xD < wallWidth; xD++) {            
                let me = magik.aspecto();
                me.setX(me.getX() + xD);
                me.setY(me.getY() + yD);
                me.setZ(me.getZ() + zD);

                me.getBlock().setType(air);
            }
        }
        

    }

}

wall3();