const magik = magikcraft.io;

function bridge() {
    let me = magik.hic();
    // adjust Y by 1 to get the position under the player
    me.setY(me.getY() - 1);

    // set the target; player's gaze with Y set to player's Y
    let target = magik.aspecto();
    target.setY(me.getY());

    // get the block type the player is on
    let bridgeBlockType = me.getBlock().getType();

    // the goal is to construct a bridge from me to target
    // the only deltas will be in the X and Z axes (for now!)
    // split the total deltas into a number of segments and then apply

    let allBlocks = [];

    let segmentsMax = 100;
    let totalDeltaX = target.getX() - me.getX();
    let totalDeltaZ = target.getZ() - me.getZ();

    // how many block per segment?
    let segmentDeltaX = totalDeltaX / segmentsMax;
    let segmentDeltaZ = totalDeltaZ / segmentsMax;
    
    // we will floor these values; 
    // we want an internal float representation but external int
    let actualX = me.getX();
    let actualZ = me.getZ();

    magik.dixit("We shall build a bridge!");

    let segmentIndex = 0;
    while (segmentIndex < segmentsMax) {

        let lastX = Math.floor(actualX);
        let lastZ = Math.floor(actualZ);

        actualX += segmentDeltaX;
        actualZ += segmentDeltaZ;

        me.setX(Math.floor(actualX));
        me.setZ(Math.floor(actualZ));

        // store the original type for revervsion
        let blockData = {
            x: me.getX(),
            y: me.getY(),
            z: me.getZ(),
            blockMaterial: me.getBlock().getType()
        };

        allBlocks.push(blockData);

        // now set!
        me.getBlock().setType(bridgeBlockType);

        segmentIndex++;
    }

    magik.dixit("A bridge has appeared!");

    // time bridge will exist in seconds
    let bridgeTime = 60;
    let timeLeft = bridgeTime - 1;

    magik.doNTimes(() => {
        magik.dixit(timeLeft + " seconds until bridge destruction.");
        timeLeft--;
    }, bridgeTime, 1000, () => {
        magik.dixit("Goodbye bridge!");
        for (let i = 0; i < allBlocks.length; i++) {
            let thisBlockData = allBlocks[i];

            me.setX(thisBlockData.x);
            me.setY(thisBlockData.y);
            me.setZ(thisBlockData.z);
            let thisBlockType = thisBlockData.blockMaterial;

            me.getBlock().setType(thisBlockType);
        }
        magik.dixit("The bridge is gone!");
    });

}

bridge();