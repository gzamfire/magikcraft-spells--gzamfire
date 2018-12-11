const magik = magikcraft.io;

function randRange(lower, higher) {
    return parseInt(Math.random() * (higher - lower) + lower);
}

function ori() {
    let me = magik.hic();

    let randX = randRange(-5000, 5000);
    let randZ = randRange(-5000, 5000);
    me.setX(randX);
    me.setY(63);
    me.setZ(randZ);

    magik.ianuae(me);
}

ori();