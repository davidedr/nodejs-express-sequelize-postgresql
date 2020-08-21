const db=require("./../models");
const Tutorial=db.tutorials;
const Op=db.Sequelize.Op;

exports.create=(req, res) => {

  console.log("tutorial.controller - create")
  console.log(req)

  if (!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty!"});
    return;
  }

  console.log("req.body.description")
  console.log(req.body.description)
  
  const new_tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published? req.body.published: false
  };

  Tutorial.create(new_tutorial)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Server error while creating Tutorial record"
    });
  });
};

exports.findAll=(req, res) => {

  console.log("tutorial.controller - findAll")
  console.log(req)

  var condition=null;
  if (req.query) {
    const title=req.query.title;
    condition=title?{ title: { [Op.like]: `%${title}%`} }: null;
  }

  Tutorial.findAll({ where: condition })
    .then(data => {res.send(data)})
    .catch(err => {
      res.status(500).send({ message: err.message || "Server error while getting Tutorials"});
    })
};

exports.findOne=(res, req) => {

};

exports.update=(res, req) => {

};

exports.delete=(res, req) => {

};

exports.deleteAll=(res, req) => {

};

exports.findAllPublished=(res, req) => {

};
