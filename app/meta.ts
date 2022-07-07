import type { HtmlMetaDescriptor } from '@remix-run/node';

let defaultTitle = 'Remix Example';
let titleTemplate = `${defaultTitle} | %s`;
let defaultDescription = 'A simple starter project for Remix.';

export function createMeta({
  title,
  description,
  ...rest
}: HtmlMetaDescriptor = {}): HtmlMetaDescriptor {
  return {
    ...rest,
    title: title ? titleTemplate.replace('%s', title) : defaultTitle,
    description: description || defaultDescription,
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
  };
}
