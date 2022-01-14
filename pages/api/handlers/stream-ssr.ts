import { render } from "@lit-labs/ssr";
import { Readable } from "stream";
import { readStream } from "./read-stream";

export const streamSSR = async (template: any) => {
    return await readStream(Readable.from(render(
    template
)));
};