exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  if (headers && request.uri.includes('/_nuxt/') && (
    request.uri.endsWith('.css') ||
    request.uri.endsWith('.js') ||
    request.uri.endsWith('.ttf')
  )) {

    let br = false;
    let gz = false;

    // all headers are passed as multi value headers, that means
    //      * > Cookie: First=1; Second=2
    //      * > Cookie: ClientCode=abc
    // headers["cookie"][0].value is equal to "First=1; Second=2"
    const ae = headers['accept-encoding'];
    if (ae) {
      for (let i = 0; i < ae.length; i++) {
        const value = ae[i].value;
        const bits = value.split(/\s*,\s*/);
        if (bits.indexOf('br') !== -1) {
          br = true;
          break;
        } else if (bits.indexOf('gzip') !== -1) {
          gz = true;
          break;
        }
      }
    }

    // If br is supported use .br suffix, .gz for gzip
    if (br) request.uri += '.br';
    else if (gz) request.uri += '.gz';
  } else if (!request.uri.includes('.')) {
    request.uri += `${request.uri.endsWith('/') ? '' : '/'}index.html`
  }

  callback(null, request);
};