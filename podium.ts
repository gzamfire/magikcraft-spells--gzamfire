const magik = magikcraft.io;

let count = 0;
const Material = magik.type('Material');

function podium() {

    let me = magik.hic();

    magik.doNTimes(() => {
        me.setY(me.getY() + 1);
        me.getBlock().setType(Material.GLASS);
    }, 50, 10);

    me.setY(me.getY() + 1);
    magik.ianuae(me);
}

podium();