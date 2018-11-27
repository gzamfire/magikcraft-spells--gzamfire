const magik = magikcraft.io;

let count = 0;

function bridgeMe2() {
    
    magik.doNTimes(() => {
        
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        count++;
        magik.dixit(count);
    }, 100, 100);
}


function bridgeMe() {
    
    magik.doNTimes(() => {
        
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        count++;
        magik.dixit(count);
    }, 100, 100, hi);
}

function hi() {
    magik.dixit("hey!");
}

function airJordans() {

    const Material = magik.type('Material');

    hi();
    bridgeMe();
    hi();
}

airJordans();