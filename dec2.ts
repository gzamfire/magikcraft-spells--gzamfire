const magik = magikcraft.io;

function dec() {
    // let original = magik.getPlugin().getServer().getWorlds()[0].getBlockAt(me).getType();
    
    let me = magik.hic();
    // me.setX(me.getX() + 1);

    const Material = magik.type('Material');

    let targetType = Material.LADDER;
    me.getBlock().setType(targetType);
}