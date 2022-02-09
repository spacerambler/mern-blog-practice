const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

// UPDATE -- spinning in Insomnia, not sure what I did wrong
router.put("/:id", async (req, res) =>{
    if (req.body.userId === req.params.id){
        if (req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            })
            res.status(200).json(updatedUser)
        } catch(err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("Not your account")
    }
})

// DELETE - skipping this for now
router.delete("/:id", async (req, res)=>{
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await this.post.deleteMany({ user: user.username })
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch(err) {
            res.status(404).json("User not found")
        }
    } else {
        res.status(401).json("Not your account")
    }
})

// GET USER


module.exports = router