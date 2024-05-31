const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// 새 책 등록
router.post("/book", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book, { message: "New book post enrolled." });
  } catch (error) {
    res.status(500).json({ message: "Failed to enroll book post." });
  }
});

// 책 삭제
router.delete("/book/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Book.destroy({ where: { id: req.params.id } });

    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Book post not found." });
    } else {
      res.json({ message: "Book post deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book post." });
  }
});

// 책 수정
router.put("/book/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Book.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Book post not found." });
    } else {
      const book = await Book.findByPk(req.params.id);
      res.status(200).json(book, { message: "Book post edited." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to edit book post." });
  }
});

// 모든 책 정보 전송
// router.get("/books", async (req, res) => {
//   try {
//     const books = await Book.findAll();
//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch book posts." });
//   }
// });

module.exports = router;
