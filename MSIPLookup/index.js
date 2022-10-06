module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const ip = req.headers['x-forwarded-for'].split(':')[0];
    const message = `L'adresse IP ci-dessous est votre adresse IP de sortie, telle que vue par les services Microsoft.<br /><br />${ip}`;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: message
    };
}
