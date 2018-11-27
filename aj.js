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

        hi("3");
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        // count++;
        magik.dixit(count);
}

function speak(words) {
    magik.dixit(words);
}

function airJordans() {

    const Material = magik.type('Material');

    hi("1");
    bridgeMe();
    hi("2");
}

airJordans();