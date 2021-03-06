const magik = magikcraft.io;

let count = 0;
const Material = magik.type('Material');

function bridgeMe2() {

    if (count >= 1000) {
        return;
    }
    
    magik.doNTimes(() => {
        
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        me.setX(me.getX() - 1);
        me.getBlock().setType(Material.GLASS);
        me.setZ(me.getZ() - 1);
        me.getBlock().setType(Material.GLASS);
        me.setZ(me.getZ() + 1);
        me.getBlock().setType(Material.GLASS);

        me.setX(me.getX() + 1);
        me.getBlock().setType(Material.GLASS);
        me.setZ(me.getZ() - 1);
        me.getBlock().setType(Material.GLASS);
        me.setZ(me.getZ() + 1);
        me.getBlock().setType(Material.GLASS);

        count++;
        magik.dixit(count);
    }, 100, 0, bridgeMe2);
}


function bridgeMe() {

    magik.doNTimes(() => {
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        count++;
        magik.dixit(count);

    }, 100, 0, bridgeMe2);
        
}

function speak(words) {
    magik.dixit(words);
}

function airJordans() {

    const Material = magik.type('Material');

    speak("1");
    bridgeMe();
    speak("2");
}

airJordans();