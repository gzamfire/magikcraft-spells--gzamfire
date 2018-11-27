const magik = magikcraft.io;

function ladder() {
    var me = magik.hic();

    me.setY(me.getY() - 1);

    const Material = magik.type('Material');

    me.getBlock().setType(Material.LADDER); 
}