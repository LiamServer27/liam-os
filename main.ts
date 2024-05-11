function loginPrompt () {
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
            Curent_user = selection
            loggedIn = selectedIndex
            if (blockSettings.exists("moreApps" + loggedIn)) {
                blockSettings.writeStringArray("moreApps" + loggedIn, [])
            }
            userMenu.close()
            desktop()
        }
    })
}
function desktop () {
    scene.setBackgroundImage(assets.image`Green`)
    myMenu = miniMenu.createMenuFromArray([
    miniMenu.createMenuItem("Logout", assets.image`log out`),
    miniMenu.createMenuItem("Liam Store", img`
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
        `),
    miniMenu.createMenuItem("Show Name", img`
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
        `)
    ])
    myMenu.setDimensions(scene.screenWidth(), scene.screenHeight())
    myMenu.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 6)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 7)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
    myMenu.setTitle("Logout")
    myMenu.onSelectionChanged(function (selection, selectedIndex) {
        myMenu.setTitle(selection)
        music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    })
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        Menu_Press(selection)
    })
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
function Menu_Press (Value: string) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    if (Value == "Logout") {
        myMenu.close()
        loginPrompt()
    }
    if (Value == "Show Name") {
        game.splash("Your Name Is:", Curent_user)
    }
}
let Name = ""
let myMenu: miniMenu.MenuSprite = null
let loggedIn = 0
let Curent_user = ""
let userMenu: miniMenu.MenuSprite = null
let usernames: string[] = []
let userMenuList: miniMenu.MenuItem[] = []
let text_list = ["com.tanner.simpleclicker"]
let shopApps = [miniMenu.createMenuItem("Simple Clicker", img`
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
music.play(music.createSong(hex`0078000408020a00001c00010a006400f401640000040000000000000000000000000005000004310000000400012704000800012708000c0001251000180002272918001c0001251c002000012a28003000012938003900012501001c000f05001202c102c20100040500280000006400280003140006020004060038003900012502001c000c960064006d019001000478002c010000640032000000000a060005060038003900012503001c0001dc00690000045e0100040000000000000000000005640001040003060038003900012504001c00100500640000041e000004000000000000000000000000000a040004060038003900012505001c000f0a006400f4010a0000040000000000000000000000000000000002060038003900012506001c00010a006400f401640000040000000000000000000000000000000002060038003900012507001c00020a006400f401640000040000000000000000000000000000000003060038003900012508001c000e050046006603320000040a002d0000006400140001320002010002060038003900012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80054000000010001040400050001040800090001040c000d0001041000110001041400150001041800190001041c001d0001042000210001042400250001042800290001042c002d000104300031000104380039000107`), music.PlaybackMode.UntilDone)
loginPrompt()
