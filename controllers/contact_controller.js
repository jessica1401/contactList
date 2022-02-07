const AllContacts = require('../models/contactSchema');
console.log("contacts")
module.exports.contact = function(req, res) {
    AllContacts.find({}, (err, allContacts) => {
        if(err) {
            console.log(`There was some error in fetching all contacts`);
            return;
        }
        return res.render('contact', {
            title: 'Contact',
            contact_list: allContacts,
            error: ''
        })
    })
}

module.exports.createContact = function(req, res) {
    AllContacts.find({email: req.body.email}, (err, contact) => {
        if(err) {
            console.log(`There was some error in creating contact`);
            return;
        }
        if(contact.length != 0) {
            AllContacts.find({}, (err, contacts) => {
                if(err) {
                    return;
                }
                return res.render('contact', {
                    title: 'contact',
                    contact_list: contacts,
                    error: 'Conatct Already exists with same email Id'
                })
            })

        } else {
            AllContacts.find({phone_number: req.body.phone_number}, (err, contact) => {
                if(err) {
                    return;
                }
                if(contact.length != 0) {
                    AllContacts.find({}, (err, contacts) => {
                        if(err) {
                            return;
                        }
                        return res.render('contact', {
                            title: 'contact',
                            contact_list: contacts,
                            error: 'Conatct Already exists with same Phone Number'
                        })
                    })
                } else {
                    AllContacts.create({
                        name: req.body.name,
                        phone_number: req.body.phone_number,
                        email: req.body.email
                    }, (err, newContact) => {
                        if(err) {
                            console.log(`There was some error in creating contact`);
                            return;
                        }
                        console.log(`Contact Successfully created`);
                        return res.redirect('/contact');
                    })
                }
            })
        }
    })
}

module.exports.deleteContact = function(req, res) {
    console.log('Contact Delted');
    console.log(req.query.phone_number);
    AllContacts.deleteOne({phone_number: req.query.phone_number}, (err) => {
        if(err) {
            console.log(`There Was some error in deleting the contact`);
            return;
        }
        return res.redirect('/contact');
    })
}

module.exports.serarch = function(req, res) {
    console.log(req.body.search);
    AllContacts.find({phone_number: req.body.search}, (err, contact) => {
        if(err) {
            return
        } else {
            AllContacts.find({}, (err, contacts) => {
                if(err) {
                    return
                }

                return res.render('contact', {
                    title: 'contact',
                    contact_list: contacts,
                    error: contact
                })

            })
        }
    })
}