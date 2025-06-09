
  import "./polyfill.mjs";
  import { Buffer } from "node:buffer";
  import { renderApplication } from "../../../dist/my-app/server/render-utils.server.mjs";
  import bootstrap from "../../../dist/my-app/server/main.server.mjs";
  import "./fixup-event.mjs";

  const document = Buffer.from("PCFkb2N0eXBlIGh0bWw+DQo8aHRtbCBsYW5nPSJlbiI+DQo8aGVhZD4NCiAgPG1ldGEgY2hhcnNldD0idXRmLTgiPg0KICA8dGl0bGU+TXlBcHA8L3RpdGxlPg0KICA8YmFzZSBocmVmPSIvIj4NCiAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4NCiAgPGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS94LWljb24iIGhyZWY9ImZhdmljb24uaWNvIj4NCjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzLTVJTlVSVFNPLmNzcyI+PC9oZWFkPg0KPGJvZHk+DQogIDxhcHAtcm9vdD48L2FwcC1yb290Pg0KPHNjcmlwdCBzcmM9InBvbHlmaWxscy1GRkhNRDJUTC5qcyIgdHlwZT0ibW9kdWxlIj48L3NjcmlwdD48c2NyaXB0IHNyYz0ibWFpbi1ZT1dHSVNXNC5qcyIgdHlwZT0ibW9kdWxlIj48L3NjcmlwdD48L2JvZHk+DQo8L2h0bWw+DQo=", 'base64').toString("utf-8");
  
  export default async (request, context) => {
    const html = await renderApplication(bootstrap, {
      url: request.url,
      document,
      platformProviders: [{ provide: "netlify.request", useValue: request }, { provide: "netlify.context", useValue: context }],
    });
    return new Response(html, { headers: { "content-type": "text/html" } });
  };
  
  export const config = {
    path: "/*",
    excludedPath: ["/favicon.ico","/index.html","/main-YOWGISW4.js","/polyfills-FFHMD2TL.js","/styles-5INURTSO.css","/"],
    generator: "@netlify/angular-runtime@2.1.0",
    name: "Angular SSR",
  };
  