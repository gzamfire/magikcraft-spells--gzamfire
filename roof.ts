const magik = magikcraft.io;

function roof(roofHeight, wallWidth, targetType) {
    /* BUILD THE ROOF */

    let yD = roofHeight;
    // zD range -5 to 5 (height of wall)
    // xD range -5 to 5 (width of wall)

    for (let zD = -1 * wallWidth; wallWidth <= 5; zD++) {
                
        for (let xD = -1 * wallWidth; xD <= wallWidth; xD++) {
            
            let me = magik.hic();
            me.setX(me.getX() + xD);
            me.setY(me.getY() + yD);
            me.setZ(me.getZ() + zD);

            me.getBlock().setType(targetType);
            // clearCount++;

        }
    }
}