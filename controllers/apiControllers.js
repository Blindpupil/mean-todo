const bodyParser = require('body-parser');
const Todos = require('../models/todoModel');

module.exports = function(app) {
  app.use(bodyParser.json());  // the parser middleware will look at the request before we do anything with it: it will parse json out of the http request body.
  app.use(bodyParser.urlencoded({ extended: true })); // will also help us manage data encoded in the url if there's any

  // find todos of a user by username
  app.get('/api/todos/:username', (req, res) => {
    Todos.find({ username: req.params.username }, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

  // find a single one by id
  app.get('/api/todo/:id', (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // updating or adding a new one
  app.post('/api/todo', (req,res) => {
    // if the post request has an id, it's an update...
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {    // another useful mongoose method
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      }, (err, todo) => {
        if (err) throw err;
        res.send('Success');
      });
    } else {
      // if not, it's an 'add new' request
      const newTodo = Todos({
        username: 'Test',   // we don't have this info at this point (this is an existing user adding a new one)
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });

      newTodo.save((err) => {
        if (err) throw err;
        res.send('Success');
      })
    }
  });

  // delete one
  app.delete('/api/todo', (req, res) => {
    Todos.findByIdAndRemove(req.body.id, (err) => {
      if (err) throw err;
      res.send('Success');
    })
  });
};