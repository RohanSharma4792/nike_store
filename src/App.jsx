import React from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories, Success, Cancel } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
// import success from './components/success';
// import cancel from './components/cancel'
import Route from 'react-dom'
import success from './components/Success';
// const stripe = require('stripe')(process.env.STRIPE_KEY)

const App = () => {
  return (
   <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Success endpoint={success}/>
        {/* <Cancel endpoint={cancel}/> */}

        {/* <Route path="/success" element = {<Success/>}/>
        <Route path="/cancel" element = {<Cancel/>}/> */}
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}


export default App;