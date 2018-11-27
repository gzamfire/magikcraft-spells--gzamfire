const magik = magikcraft.io;

function ladder() {
    var me = magik.hic();

    me.setY(me.getY() - 1);

    me.getBlock().setType(Material.LADDER); 
}