const magik = magikcraft.io;

function wall() {
    var me = magik.hic();
    var underMe = me.getY() - 1;

    me.setY(underMe);

    var blockUnderMe = me.getBlock().getType();

    

    magik.doNTimes(function() {
        me.setY(me.getY() + 1);
        me.getBlock().setType(blockUnderMe);
    }, 200);
}

wall();
