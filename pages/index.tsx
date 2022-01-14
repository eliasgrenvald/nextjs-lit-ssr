import React, { useEffect, useState } from 'react';
import { createMarkup, isServer, fetchComponent } from '../utils';

const Index = ({ button }: { button: string }) => {
  const [mounted, setMounted] = useState(isServer);

  useEffect(() =>{
    if(!mounted){
      hydrate();
    }
    setMounted(true)
  },[])

  const disableButton = async () => {
    if (!isServer()) {
      const { render } = await import('lit');
      const { simpleButtonTemplate } = await  import('../hydration');
      render(await simpleButtonTemplate({ id: 'test-button', disabled: true }), document.body);
    }
  }

  return (
    <main>
      <h1>All these are SSR rendered</h1>
      {mounted
        ? <div id="button-container" dangerouslySetInnerHTML={createMarkup(button)}></div>
        : null}
     
      <button onClick={disableButton}>Disable the simple button</button>
    </main>
  )
}

const hydrate = async () => {
  if (!isServer()) {
    const { hydrate } = await import('lit/experimental-hydrate.js');
    await import('../components/simple-button');
    const { simpleButtonTemplate } = await  import('../hydration');
    hydrate(simpleButtonTemplate(), document.body);
  }
}

export async function getServerSideProps () {
  const button = await fetchComponent('button');
  return { props: { button } }
}

export default Index;