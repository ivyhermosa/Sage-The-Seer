const { Prophecy } = require('../Models');

const prophecyData = require('./prophecyDb');

Prophecy.bulkCreate(prophecyData).then(res => {
    console.log(res);
    process.exit();
});

