import { render } from "@lit-labs/ssr";
import { html } from "lit";
import { Readable } from "stream";
import { readStream } from "./read-stream";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export const renderSSR = async (template: string) => {
    return await readStream(Readable.from(render(html`
    ${unsafeHTML(template)}
`)));
};