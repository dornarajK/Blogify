let BlogDB = require('../model/model')


//* Crete and save new blog

exports.create = (req, res) => {
  // validate request (if blog not added)
  console.log(req.body.title)

  if (!req.body.title || !req.body.description || !req.body.artical|| !req.body.yourName) {
    return res.status(400).send({ message: 'blog can not be empty!' });
  }

  //if blog added
  // New blog crete new blog
  const blog = new BlogDB({
    title: req.body.title,
    description: req.body.description,
    artical: req.body.artical,
    yourName: req.body.yourName,
    time: req.body.time
    
  })


  blog.save()
    .then(blog => {
      res.redirect('/addArtical');
      // Redirect after successful save
    })
    .catch(err => {
      // Error handling
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the blog.'
      });
    })


}

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    BlogDB.findById(id)
      .then(data => {
        if (!data) {
          res.status(400).send({ message: `not found blog with id= ${id}` })
        } else {
          res.send(data)
        }

      }).catch(err => {
        res.status(500).send({ message: `Error retriveing blog with id = ${id}` })
      })

  } else {
    BlogDB.find()
      .then(blog => {
        res.send(blog)
      })
      .catch(err => {
        res.status(500).send({ message: err.message || 'Eeeoe Occurred while retriving blog information' })
      })
  }
}


exports.readArtical = (req, res) => {
  const id = req.query.id;

  if (id) {
    BlogDB.findById(id)
      .then(data => {
        if (!data) {
          res.send({ message: `Error retrieving blog with id = ${id}` });
        } else {
          res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message || `Error retrieving blog with id = ${id}` });
      });
  } else {
    BlogDB.find()
      .then(blog => {
        res.send(blog);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || 'Error occurred while retrieving blog information' });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Deta to update can not be empty" })
  }

  const id = req.params.id;

  BlogDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(blog => {
      if (!blog) {
        res.status(404)
          .send({ message: "Data to update cannot be empty" });
      } else (
        res.send(blog)
      )
    }).catch(err => {
      res.status(500).send({ message: 'Error Update information' })
    })
}

exports.delete = (req, res) => {

  const id = req.params.id;

  BlogDB.findByIdAndDelete(id)
    .then(blog => {
      if (!blog) {
        res.status(404).send({ message: `Cannot Delete with id ${id}.Maybe id wrong` })
      } else {
        res.send({ message: 'blog id delet successfull!' })
      }

    }).catch(err => {
      res.stauts(500).send({
        message: `Could not delete User with id= ${id}`
      })
    });


}