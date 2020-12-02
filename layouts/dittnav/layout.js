const express = require('express');
const Layout = require('@podium/layout');

const layout = new Layout({
    name: 'dittNAV',
    pathname: '/',
});

const vta = layout.client.register({
    name: 'vta',
    uri: 'http://localhost:7100/manifest.json',
});

const vtaRegistrering = layout.client.register({
    name: 'vtaRegistrering',
    uri: 'http://localhost:7200/manifest.json',
});

const app = express();
app.use(layout.middleware());

app.get(layout.pathname(), async (req, res, next) => {
    const incoming = res.locals.podium;

    const content = await Promise.all([
        vta.fetch(incoming),
        vtaRegistrering.fetch(incoming),
    ]);

    incoming.podlets = content

    res.podiumSend(`
        <section>${content[0]}</section>
        <section>${content[1]}</section>
    `);
});

app.listen(7000);