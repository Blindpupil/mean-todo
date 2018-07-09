const Todos = require('../models/todoModel');

module.exports = function (app) {
  // Set up an endpoint to seed the database
  app.get('/api/setupTodos', (req, res) => {
    const seedTodos = [
      {
        username: 'Cesar',
        todo: 'Finish node app',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'Lynch',
        todo: 'Finish anything',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'Zuzu',
        todo: 'Finish Cesar',
        isDone: true,
        hasAttachment: true,
      }
    ];
    Todos.create(seedTodos, (err, results) => {
      res.send(results);
    });
  });
};
