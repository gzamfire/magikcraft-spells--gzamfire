const magik = magikcraft.io;

function goTo() {
    let sender = magik.getPlugin().getServer().getPlayer("bravergragoon77");
    
    magik.ianuae(sender.location);
}

goTo();
