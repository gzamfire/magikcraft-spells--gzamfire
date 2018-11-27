const magik = magikcraft.io;

function airJordans() {

    const Material = magik.type('Material');

    magik.doNTimes(() => {
        
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);
        magik.dixit("Air.")
    }, 10, 100);


}

airJordans();