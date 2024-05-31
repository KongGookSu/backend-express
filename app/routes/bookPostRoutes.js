const express = require("express");
const router = express.Router();
const BookPost = require("../models/BookPost");

// 책 게시물 등록
router.post("/book-post", async (req, res) => {
  try {
    const bookPost = await BookPost.create(req.body);
    res.status(201).json(bookPost, { message: "New book post enrolled." });
  } catch (error) {
    res.status(500).json({ message: "Failed to enroll book post." });
  }
});

// 책 게시물 삭제
router.delete("/book-post/:id", async (req, res) => {
  try {
    const deletedRowsCount = await BookPost.destroy({ where: { id: req.params.id } });

    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Book post not found." });
    } else {
      res.json({ message: "Book post deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book post." });
  }
});

// 책 게시물 수정
router.put("/book-post/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await BookPost.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Book post not found." });
    } else {
      const bookPost = await BookPost.findByPk(req.params.id);
      res.status(200).json(bookPost, { message: "Book post edited." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to edit book post." });
  }
});

// 모든 책 정보 전송
// router.get("/book-posts", async (req, res) => {
//   try {
//     const bookPosts = await BookPost.findAll();
//     res.json(bookPosts);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch book posts." });
//   }
// });

module.exports = router;
