const express = require("express");
const multer = require("multer");
const Resource = require("../models/Resource");

const router = express.Router();

// File upload settings
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Save files in 'uploads' folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });


// 🟢 1️⃣ Fetch all resources
router.get("/", async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// 🔵 2️⃣ Add a new resource
router.post("/", upload.single("file"), async (req, res) => {
    const { title, description } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newResource = new Resource({
        title,
        description,
        fileUrl,
        likes: 0,
        comments: [],
    });

    try {
        const savedResource = await newResource.save();
        res.status(201).json(savedResource);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// 🟣 3️⃣ Like a resource
router.put("/:id/like", async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) return res.status(404).json({ message: "Resource not found" });

        resource.likes += 1;
        await resource.save();
        res.json({ message: "Liked", likes: resource.likes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// 🟠 4️⃣ Add a comment
router.post("/:id/comment", async (req, res) => {
    const { user, text } = req.body;

    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) return res.status(404).json({ message: "Resource not found" });

        resource.comments.push({ user, text });
        await resource.save();
        res.json({ message: "Comment added", comments: resource.comments });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// 🔴 5️⃣ Delete a resource
router.delete("/:id", async (req, res) => {
    try {
        await Resource.findByIdAndDelete(req.params.id);
        res.json({ message: "Resource deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
