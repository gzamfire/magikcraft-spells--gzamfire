
var magik = magikcraft.io;

function e_helper(times) {

    let sender = magik.getPlugin().getServer().getPlayer("GurkanStarBro");
    let n = 50;
    let delay = 200;

    sender.location.getWorld().createExplosion(magik.aspecto(),n);        
    times--;

    if (times > 0) {
        var task = magik.setTimeout(
            function() {
                // sender = sender2;
                magik.dixit(times + " times left.")
                e_helper(times);
                
            },
            delay
        );
    } else {
        magik.dixit("Done.");
    }

}

// explode  
function e() {

    e_helper(10);
    
}

e()
