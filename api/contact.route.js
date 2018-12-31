const express = require('express');
const contactRoutes = express.Router();

let Contact = require('./contact.model');

contactRoutes.route('/').get(function(req, res){
  Contact.find(function(err, contacts){
    if(err){
      res.json(err);
    }else{
      res.json(contacts)
    }
  });
});

contactRoutes.route('/create').post(function(req, res){
  let contact = new Contact(req.body);
  contact.save()
    .then(() => {
      res.status(200).json({'message': 'Contact created successfully.'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

contactRoutes.route('/update/:id').put(function(req, res){
  Contact.findById(req.params.id, function(err, contact){
    if(!contact){
      res.status(404).send("contact not found");
    }else{
        contact.firstName = req.body.firstName;
        contact.lastName = req.body.lastName;
        contact.company = req.body.company;
        contact.jobTitle = req.body.jobTitle;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.notes = req.body.notes;
        contact.save().then(() => {
          res.json({'message': 'Updated successfully.'});
        }).catch(() => {
          res.status(400).send("unable to save to database");
        });
    }
  });
});

contactRoutes.route('/delete/:id').delete(function(req, res){
  Contact.findById(req.params.id, function(err, contact){
    if(!contact){
      res.status(404).send("contact not found");
    }else{
      contact.remove().then(() => {
        res.json({'message': 'Deleted successfully.'});
      }).catch(() => {
        res.status(400).send("unable to delete");
      });
    }
  });
});

module.exports = contactRoutes;
