const mathpagecontroller = (req,res) => {
    try {
        res.send("This is math controller")
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = mathpagecontroller;