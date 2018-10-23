const magik = magikcraft.io;

function wall() {
    var me = magik.hic();
    var underMe = me.getY() - 1;

    me.setY(underMe);

    var blockUnderMe = me.getBlock().getType();

    me.setY(me.getY() + 10);

    me.getBlock().setType(blockUnderMe);

}
