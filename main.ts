function loginPrompt () {
    shopComNames = ["com.tanner.clicker"]
    shopApps = [miniMenu.createMenuItem("Voltage Click", img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 2 2 2 2 2 2 2 6 6 . . 
        . 6 6 2 2 2 4 4 4 2 2 2 6 6 . 
        . 6 2 2 2 4 4 2 4 4 2 2 2 6 . 
        . c 2 2 4 4 4 4 4 4 4 2 2 c . 
        . c 5 2 4 2 2 2 2 2 4 2 5 c . 
        . c 5 5 2 2 2 2 2 2 2 5 5 c . 
        . c 6 6 5 5 5 5 5 5 5 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c e d d d d d d d d d e c c 
        c c c c c e e e e e c c c c c 
        c c e e e e e e e e e e e c c 
        . c c e e e e e e e e e c c . 
        . . . c c c c c c c c c . . . 
        `)]
    scene.setBackgroundImage(assets.image`Background`)
    userMenuList = []
    usernames = blockSettings.readStringArray("usernames")
    for (let value of usernames) {
        userMenuList.push(miniMenu.createMenuItem(value, img`
            . . . . f f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 6 f . . . . 
            . . . f 1 f 1 1 f 1 1 6 f . . . . 
            . . . f 1 f 1 1 f 1 1 6 f . . . . 
            . . . f 1 f 1 1 f 1 1 6 f . . . . 
            . . . f 1 f 1 1 f 1 1 6 f . . . . 
            . . . f 1 1 1 1 1 1 1 6 f . . . . 
            . . . f 1 1 1 1 1 1 1 6 f . . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . . 
            . . . . f f f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . . 
            . . . f 1 1 1 1 1 1 1 1 f f . . . 
            . . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 6 f . 
            f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
            . f f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . . 
            `))
    }
    userMenuList.push(miniMenu.createMenuItem("Add", img`
        ......fffff.......
        .....f11111f......
        .....f11111f......
        .....f11111f......
        .....f11111f......
        .fffff11111ffffff.
        f1111111111111116f
        f1111111111111116f
        f1111111111111116f
        f1111111111111116f
        f1111111111666666f
        .fffff11116ffffff.
        .....f11116f......
        .....f11116f......
        .....f11116f......
        .....f11116f......
        .....f66666f......
        ......fffff.......
        `))
    userMenu = miniMenu.createMenuFromArray(userMenuList)
    userMenu.setTitle("User select")
    userMenu.setPosition(scene.screenWidth() / 5, scene.screenHeight() / 2)
    userMenu.setDimensions(100, scene.screenHeight())
    userMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
    userMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 1)
    userMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
    userMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Add") {
            newUser()
        } else {
            currentUser = selection
            loggedIn = selectedIndex
            if (blockSettings.exists("moreApps" + loggedIn)) {
                blockSettings.writeStringArray("moreApps" + loggedIn, [])
            }
            userMenu.close()
            music.play(music.stringPlayable("C D E F G A B C5 ", 953), music.PlaybackMode.InBackground)
            desktop()
        }
    })
}
function desktop () {
    scene.setBackgroundImage(assets.image`Green`)
    homeMenuList = [miniMenu.createMenuItem("Logout", assets.image`log out`), miniMenu.createMenuItem("Liam Store", img`
        ...ffffffffffff...
        ..f111111111111f..
        .f1ffffffffffff6f.
        .f1f..........f6f.
        .f6ffffffffffff6f.
        f777777777777777bf
        f777777771777777bf
        f777777771777777bf
        f777771111777777bf
        f777777771777777bf
        f777777771777777bf
        f771111111777777bf
        f777777771777777bf
        f777777771777777bf
        f777771111777777bf
        f777777771111777bf
        fbbbbbbbbbbbbbbbbf
        .ffffffffffffffff.
        `), miniMenu.createMenuItem("Show Name", img`
        . . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 1 6 f . . . . 
        . . . f 1 f 1 1 f 1 1 6 f . . . . 
        . . . f 1 f 1 1 f 1 1 6 f . . . . 
        . . . f 1 f 1 1 f 1 1 6 f . . . . 
        . . . f 1 f 1 1 f 1 1 6 f . . . . 
        . . . f 1 1 1 1 1 1 1 6 f . . . . 
        . . . f 1 1 1 1 1 1 1 6 f . . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . . 
        . . . . f f f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 1 1 1 1 1 1 1 f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 6 f . 
        f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
        . f f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . . 
        `)]
    myMenu = miniMenu.createMenuFromArray(homeMenuList)
    myMenu.setDimensions(scene.screenWidth(), scene.screenHeight())
    myMenu.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 6)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 7)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
    myMenu.onSelectionChanged(function (selection, selectedIndex) {
        myMenu.setTitle(selection)
        music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    })
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        Menu_Press(selection)
    })
}
function Menu_Press (Value: string) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    if (Value == "Logout") {
        music.play(music.stringPlayable("C5 B A G F E D C ", 953), music.PlaybackMode.InBackground)
        myMenu.close()
        loginPrompt()
    }
    if (Value == "Show Name") {
        game.splash("Your Name Is:", currentUser)
    }
    if (Value == "Liam Store") {
        if (game.ask("Liam Store is UNFINISHED,", "enter? -@TannerVoltageAlt")) {
            game.splash("Ok. If anything happens,", "REBOOT! -@TannerVoltageAlt")
            liamStore()
        }
    }
    if (Value == "Voltage Click") {
        if (!(blockSettings.exists("com.voltage.clicker/clicks" + loggedIn))) {
            game.splash("Press A to click")
            blockSettings.writeNumber("com.voltage.clicker/clicks" + loggedIn, 1)
            voltageClickAgain()
        } else {
            voltageClickAgain()
        }
        myMenu.close()
    }
}
function voltageClickAgain () {
    if (game.ask("Click?", "Clicks: " + blockSettings.readNumber("com.voltage.clicker/clicks" + loggedIn))) {
        blockSettings.writeNumber("com.voltage.clicker/clicks" + loggedIn, blockSettings.readNumber("com.voltage.clicker/clicks" + loggedIn) + 1)
        voltageClickAgain()
    } else {
        desktop()
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("DELETE ALL USER DATA")) {
        if (game.ask("Are you shure")) {
            if (game.ask("NO REGRETS")) {
                blockSettings.clear()
                game.reset()
            }
        }
    }
})
function newUser () {
    userMenu.close()
    Name = game.askForString("Name:")
    usernames.push(Name)
    blockSettings.writeStringArray("usernames", usernames)
    game.splash("User Created!!!")
    loginPrompt()
}
function liamStore () {
    listToSave = blockSettings.readStringArray("moreApps" + loggedIn)
    myMenu.close()
    shopMenu = miniMenu.createMenuFromArray(shopApps)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (true) {
        	
        } else {
        	
        }
    })
}
let shopMenu: miniMenu.MenuSprite = null
let listToSave: string[] = []
let Name = ""
let myMenu: miniMenu.MenuSprite = null
let homeMenuList: miniMenu.MenuItem[] = []
let loggedIn = 0
let currentUser = ""
let userMenu: miniMenu.MenuSprite = null
let usernames: string[] = []
let userMenuList: miniMenu.MenuItem[] = []
let shopApps: miniMenu.MenuItem[] = []
let shopComNames: string[] = []
music.stopAllSounds()
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777ffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777ffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777ffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff77777777
    7777777777777777777777777777777777777777777777ffffffff77777777777777777777777777777777777777777777777777777777777777777777777ffffffffff777777777fffffffff7777777
    7777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777777777777777777777777777777777777777fffffffffffff7777777ffffffffff7777777
    7777777777777777777777777777777777777777777777ffffff777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffff777777fffff77fff7777777
    7777777777777777777777777777777777777777777777ffffff77777777777777777777777777777777777777777777777777777777777777777777fffffff777777fffff7777ffff7777fff7777777
    7777777777777777777777777777777777777777777777fffff77777777777777777777777777777777777777777777777777777777777777777777ffffff777777777fffff777ffff77777777777777
    77777777777777777777777777777777777777777777777fff77777777777777777777777777777777777777777777777777777777777777777777fffff777777777777ffff777fff777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff77777777777777fff777fff777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff77777777777777ffff777ffff77fffff7777777
    77777777777777777777777777fff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff777777777777777ffff777ffffffffffff777777
    77777777777777777777777777fff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff777777777777777fff77777ffffffffffff77777
    77777777777777777777777777fff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff7777777777777ffff777777ffffff7ffff77777
    77777777777777777777777777fff7777777777777777fff7777777777777777777ffff77777777777777777777777fff77777777777777777777ffff777777777777fffff7777777ffff777ffff7777
    77777777777777777777777777fff7777777777777777fff7777777777777777777fffff7777777777777777777777fff777777777777777777777fff777777777777ffff777777777777777ffff7777
    77777777777777777777777777fff7777777777777777fff7777777777777777777ffffff777777777777777777777fff777777777777777777777fffff77777777fffff7777777fff777777ffff7777
    77777777777777777777777777fff7777777777777777fff7777777777777777777fffffff77777777777777777777fff777777777777777777777fffffff7777fffffff7777777ffff777ffffff7777
    7777777777777777777777777ffff7777777777777777fff7777777777777777777ffffffff7777777777777777777fff7777fff777777777777777ffffffffffffffff77777777ffffffffffff77777
    7777777777777777777777777ffff7777777777777777fff7777777777777777777fff7fffff777777777777777777fff77ffffff7777777777777777ffffffffffff7777777777fffffffffff777777
    7777777777777777777777777fff77777777777777777fff7777777777777777777fff77fffff77777777777777777fff7ffffffff77777777777777777ffffffff77777777777777fffffff77777777
    7777777777777777777777777fff77777777777777777fff7777777777777777777fff777ffff77777777777777777fffffffffffff77777777777777777777777777777777777777777777777777777
    7777777777777777777777777fff77777777777777777fff7777777777777777777fff7777ffff7777777777777777fffffff77fffffff77777777777777777777777777777777777777777777777777
    7777777777777777777777777fff77777777777777777fff7777777777777777777fff7777fffff77fffff77777777ffffff7777ffffffff777777777777777777777777777777777777777777777777
    777777777777777777777777ffff77777777777777777fff777777777777ffffffffff77777fffffffffff77777777fffff77777ffffffffff7777777777777777777777777777777777777777777777
    777777777777777777777777ffff77777777777777777fff777777777777ffffffffffffffffffffffffff77777777fffff77777ffffffffffff77777777777777777777777777777777777777777777
    777777777777777777777777fff777777777777777777fff777777777777fffffffffffffffffffffff77777777777ffff777777ffff77ffffff77777777777777777777777777777777777777777777
    777777777777777777777777fff777777777777777777fff77777777777777777ffffffffffffffff7777777777777ffff777777ffff7777fffff7777777777777777777777777777777777777777777
    777777777777777777777777fff777777777777777777fff777777777777777777fff777777777ffff777777777777ffff777777ffff77777ffff7777777777777777777777777777777777777777777
    777777777777777777777777fff777777777777777777fff777777777777777777fff777777777fffff7777777777ffff7777777ffff777777fff7777777777777777777777777777777777777777777
    777777777777777777777777fff777777777777777777fff777777777777777777fff7777777777ffff7777777777ffff77777777fff777777ffff777777777777777777777777777777777777777777
    777777777777777777777777fff777777777777777777fff777777777777777777fff77777777777ffff777777777fff777777777fff777777ffff777777777777777777777777777777777777777777
    777777777777777777777777fff777777777777777777fff777777777777777777fff77777777777fffff77777777777777777777fff7777777ffff77777777777777777777777777777777777777777
    777777777777777777777777ffff77777777777777777fff777777777777777777fff777777777777ffff777777777777777777777777777777ffff77777777777777777777777777777777777777777
    777777777777777777777777ffff77777777777777777fff777777777777777777fff7777777777777ffff777777777777777777777777777777ffff7777777777777777777777777777777777777777
    7777777777777777777777777fff77777777777777777fff777777777777777777fff7777777777777ffff777777777777777777777777777777ffff7777777777777777777777777777777777777777
    7777777777777777777777777fff77777777777777777fff777777777777777777fff7777777777777ffff7777777777777777777777777777777ffff777777777777777777777777777777777777777
    7777777777777777777777777fff77777777777777777fff777777777777777777fff777777777777777777777777777777777777777777777777ffff777777777777777777777777777777777777777
    7777777777777777777777777fff77777777777777777fff777777777777777777fff777777777777777777777777777777777777777777777777ffff777777777777777777777777777777777777777
    7777777777777777777777777fff77777777777777777ffff77777777777777777fff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777ffff7777777777777777ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777ffff77777777777777777fff777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff77777777777777fff7777777
    77777777777777777777777777ffffffffffff77777777fff7777777777777777777777777777777777777777777777777ffffff77777777777777777777777777777fff77777777777777fff7777777
    77777777777777777777777777fffffffffffffff77777fff7777777777777777777777777777777777777777777777777fffffff777777777ffffffff77777777777fff7777777777777fffff777777
    77777777777777777777777777fffffffffffffff77777777777777777777777777777777777777777777777777777777fffffffff7777777ffffffffffff77777777fff7777777777777fffff777777
    777777777777777777777777777777777777fffff77777777777777777777777777777777777777777777777777777777fff77ffffff7777fffffffffffff777fff77fff777777777777fffffff77777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff777ffffff7ffffff7777fffff777ffffffff77777ffff777ffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff7777fffff7fffff7777fffff7777fffffffffffffffff77ffff7ffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff777fffffffffff7777ffffff77777ffffffffffffffff77fffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffff777fffffff77777777ffffffffffff7ffffffffffffff77
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffff7ffff77ffffff777777777777ffff7777777fffffffffffffff7
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffff777fffffffffff77777777777777fff7777777fffffff7777fffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffff777ffffffff7777777777777777fff7777777777fff777777ffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffff777fffffff7777777777777777ffff7777777777fff7777777fff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff777fff7777ffff777777777777777777ffff7777777777fff77777777ff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff77fff7777ffffff7777777777777777ffff7777777777fff7777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff7fff77777fffffff77777777777777ffff7777777777fff7777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffff777777fffffffff777fff777777fff77777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffff77777777fffffffffffff77777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff7777777777fffffffffff77777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffff77777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
if (!(blockSettings.exists("usernames"))) {
    blockSettings.writeStringArray("usernames", [])
}
music.play(music.createSong(assets.song`welcome`), music.PlaybackMode.UntilDone)
loginPrompt()
