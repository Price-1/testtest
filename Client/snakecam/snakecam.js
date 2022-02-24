let currentSnakeCam = null;
// let snakeCamCEF = null;
mp.gui.chat.push("hello")

let removeSnakeCam = () => {
    if (currentSnakeCam != null)
    {
        mp.gui.cursor.show(false, false);
        currentSnakeCam.setActive(false);
        currentSnakeCam.destroy();
        mp.game.cam.renderScriptCams(false, false, 0, true, false);
        mp.players.local.freezePosition(false);
        snakeCamCEF.destroy();
    }  
};

mp.events.add('snakecam/create', (posX, posY, posZ, lookAtX, lookAtY, lookAtZ) => {

    // snakeCamCEF = mp.browsers.new("./Client/snakecam/cef/index.html");

    mp.gui.cursor.show(false, false);

    currentSnakeCam = mp.cameras.new('default', new mp.Vector3(posX, posY, posZ), new mp.Vector3(0, 0, 0), 60);

    currentSnakeCam.pointAtCoord(lookAtX, lookAtY, lookAtZ);
    currentSnakeCam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    mp.players.local.freezePosition(true);
});

mp.events.add('snakecam/remove', removeSnakeCam);

mp.keys.bind(0x73, true,  () => {
    if (currentSnakeCam)
    {
        removeSnakeCam();
    }
});