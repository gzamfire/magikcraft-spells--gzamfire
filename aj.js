const magik = magikcraft.io;

function airJordans() {

    magik.doNTimes(() => {
        
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType();

    }, 100);


}

airJordans();