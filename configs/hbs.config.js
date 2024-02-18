const hbs = require('hbs');
const dayjs = require('dayjs');

hbs.registerPartials(`${__dirname}/../views/partials`);


hbs.registerHelper('formatDate', (date) => {
    return `${dayjs(date).format('YYYY-MM-DD')}`
})

