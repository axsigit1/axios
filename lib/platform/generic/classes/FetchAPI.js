
const _global = (
    typeof self === "undefined" ?
    typeof global === "undefined" ?
    typeof globalThis === "undefined" ?
    globalThis :
    this :
    global :
    self
);

// In generic/pure-JS environments (Cloudflare Workers, Bun, Deno), we use globals which are expected to exist.

const FetchHeaders = _global.Headers;
const FetchRequest = _global.Request;
const FetchResponse = _global.Response;
const fetch = _global.fetch;

export {
    FetchHeaders as Headers,
    FetchRequest as Request,
    FetchResponse as Response,
}

export default fetch;