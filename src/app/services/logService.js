import * as Sentry from "@sentry/react";
import {BrowserTracing} from "@sentry/tracing";


function init (){
    Sentry.init({
        dsn: "https://6fd7cbae86e34dbf93e907823f5960e0@o4504553700261888.ingest.sentry.io/4504553739911168",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}
function log(error){
    Sentry.captureException(error);
}

const logger = {
    init,
    log
}
export default logger;