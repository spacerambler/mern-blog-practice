const router = require("express").Router()
// const User = require("../models/User")
const Post = require("../models/Post")

// CREATE
router.post("/", async (req, res)=> {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save()
        res.status(200).json(newPost)
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", async (req,res) =>{
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

// DELETE

// GET 

module.exports = router