import connection from '../configs/connectDB.js';

let getHomepage = (req, res) => {

    //logics
    let data = [];
    connection.query(
    'SELECT * FROM `users`',
    function (err, results, fields) {
        results.map(row => {data.push(
            {
                id: row.id,
                firstName: row.firstName,
                lastName: row.lastName,
                email: row.email,
                address: row.address
            }
        )

    });
        // console.log('data inside',data); // fields contains extra meta data about results, if available
        // console.log(rows); // fields contains extra meta data about results, if available 
        return res.render('TrangChu.ejs',{dataUser: JSON.stringify(data)});
    })

    // console.log('>>>Check data<<<',typeof(data), JSON.stringify(data));

    
};

module.exports = { 
    getHomepage: getHomepage
}