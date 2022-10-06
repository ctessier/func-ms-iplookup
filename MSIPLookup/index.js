module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const ip = req.headers['x-forwarded-for'].split(':')[0];
    const message = `${ip} (seen from Microsoft infrastructures)`;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: message
    };
}
