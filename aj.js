const magik = magikcraft.io;

let count = 0;
const Material = magik.type('Material');

function bridgeMe2() {

    if (count >= 10) {
        return;
    }
    
    magik.doNTimes(() => {
        
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        count++;
        magik.dixit(count);
    }, 100, 80);
}


function bridgeMe() {

    magik.doNTimes(() => {
        let me = magik.hic();
        me.setY(me.getY() - 1);
        me.getBlock().setType(Material.GLASS);

        count++;
        magik.dixit(count);

    }, 100, 80, bridgeMe2);
        
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