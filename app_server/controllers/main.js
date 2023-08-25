/* GET homepage */
const index = (req, res) => {  // creates an index function
    res.render('index', { title: 'BookTangle' });    // includes controller code for the homepage
};

//exposes the index function as a method
module.exports = {
    index
};