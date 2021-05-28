playground()

function playground() {
    var nameVar = 'Myadam'
    var nameVar = 'Adam'
    console.log('nameVar', nameVar)

    let nameLet = "A"
    nameLet = 'Awall'
    console.log('nameLet', nameLet)

    const nameConst = "Dubya"
    console.log('nameConst', nameConst)

    function getPetName() {
        var petName = 'Hal'
        return petName
    }

    /* Failure because petName, which is a var, is function scoped */
    //getPetName()
    //console.log(petName)

    // Block Scoping
    var fullName = 'Adam Dubya'
    if (fullName) {
        var firstName = fullName.split(' ')[0]
        console.log('var', firstName)
    }
    console.log(firstName) // Can see firstName because it is not defined in a function

    if (fullName) {
        const fName = fullName.split(' ')[0]
        console.log('const', fName)
    }
    // console.log(fName) // Cannot see fName because it is block scoped in the if statement

    let fName
    if (fullName) {
        fName = fullName.split(' ')[0]
        console.log('let', fName)
    }
    console.log('let', fName) // Cannot see fName because it is block scoped in the if statement
}
