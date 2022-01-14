import '@lit-labs/ssr/lib/install-global-dom-shim';
import '../../components/simple-button';
import { streamSSR } from './handlers/stream-ssr';
import { simpleButtonTemplate } from '../../hydration';

export default async function handler(_req: any, res: any) {
  res.status(200).send(await streamSSR(await simpleButtonTemplate()));
}

