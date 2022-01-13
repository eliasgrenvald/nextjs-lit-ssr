import '@lit-labs/ssr/lib/install-global-dom-shim';
import '../../components/simple-button';
import { renderSSR } from './handlers/render-ssr';

export default async function handler(_req: any, res: any) {
  res.status(200).send(await renderSSR('<simple-button>Simple button</siimple-button>'));
}