const users = require('./userData');

exports.users = (req, res) => {

    res.status(200).json(users);
}

exports.userid = (req, res) =>{
    console.log('tata');
    console.log(req.params);
    let userid = req.params.id;
    res.status(200).json(users[userid])
};