const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://www.thefactsite.com/top-100-random-funny-facts/";

axios.get(url)
    .then(res => {
        getData(res.data);
    })
    .catch(err => {
        console.log(err)
    })

let getData = html => {
    data = [];
    const $ = cheerio.load(html)
    $('.header-list').each((i, elem) => {
        data.push({fact: $(elem).text(),
        description: $(elem).next().next().text()})
    })
    console.log(data)
}