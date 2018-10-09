const magik = magikcraft.io;

function tele() {
    let myLocation = magik.hic();
    let Y = myLocation.getY();
    myLocation.setY(Y + 1000);
    magik.ianuae(myLocation);
}

tele();