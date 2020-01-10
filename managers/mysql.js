module.exports = () => {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '654065',
        // database : 'my_db'
    });

    let country = 'Argentina'

    connection.connect();
    let queryString = "SELECT * FROM sakila.city where country_id = (SELECT country_id FROM sakila.country where country = ?) order by city desc limit ?, 5"
    connection.query(queryString, [country, 0], function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });

    connection.end();
}