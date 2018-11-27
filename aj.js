const magik = magikcraft.io;

function airJordans() {

    const Material = magik.type('Material');

    let count = 0;
    magik.doNTimes(() => {
        
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        count++;
        magik.dixit(count);
    }, 100, 100);


}

airJordans();