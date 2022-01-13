import React from 'react';
import { createMarkup, renderComponent } from '../utils';

const Index = ({ button }: { icon: string, button: string }) => {
  return (
    <main>
      <h1>All these are SSR rendered</h1>
      <div dangerouslySetInnerHTML={createMarkup(button)}>
      </div>
    </main>
  )
}

export async function getServerSideProps () {
  const button = await renderComponent('button');
  return { props: { button } }
}

export default Index;