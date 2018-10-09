const magik = magikcraft.io;

function ta() {
    var here = magik.hic();
    var sight = magik.aspecto();

    sight.setY(here.getY() - 1);

    // magik.ianuae(sight);
    var isAir = false;
    var tries = 0;

    while (isAir === false && tries < 100) {
        sight.setY(sight.getY() + 1);
        isAir = sight.getBlock().getType().toString() === "AIR";

        tries++;
    } 

    magik.dixit("Elev req'd was +" + tries);
    magik.ianuae(sight);
}

ta();