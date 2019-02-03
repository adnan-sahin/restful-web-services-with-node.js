function booksController(Book) {
  function post(req, res) {
    const book = new Book(req.body);
    if (!req.body.title) {
      res.status(400);
      res.send({ code: 2002, message: 'Title is required.' });
    }
    book.save();

    return res.status(201).json(book);
  }
  function get(req, res) {
    // const { query } = req;
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(
      query,
      (err, books) => {
        if (err) {
          return res.send(err);
        }
        return res.json(books);
      }
    );
  }
  return { post, get };
}

module.exports = booksController;