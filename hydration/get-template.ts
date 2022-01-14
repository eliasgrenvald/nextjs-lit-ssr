export const getTemplate = async (templateString: string) => {
    const {html} = await import('lit');
    const { unsafeHTML } = await import('lit-html/directives/unsafe-html.js');

    return html`${unsafeHTML(templateString)}`;
  }