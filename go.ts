const magik = magikcraft.io;

function goTo() {
    let sender = magik.getPlugin().getServer().getPlayer("bravergragoon77");

    // let loc = sender.getEyeLocation().getDirection();
    magik.dixit(sender.location.toString());
    
    // magik.ianuae(loc);
}

goTo();
