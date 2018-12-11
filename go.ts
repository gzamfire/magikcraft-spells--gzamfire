const magik = magikcraft.io;

function goTo() {
    let sender = magik.getPlugin().getServer().getPlayer("bravergragoon77");

    let loc = sender.getEyeLocation();//.getDirection();
    magik.dixit(loc.toString());
    
    magik.ianuae(sender.location);
}

goTo();
