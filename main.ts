let userMenuList: miniMenu.MenuItem[] = []
let usernames: string[] = []
let userMenu: miniMenu.MenuSprite = null
let Curent_user = ""
let loggedIn = 0
let myMenu: miniMenu.MenuSprite = null
let Name = ""
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
