import HeadBody from './HeadBody'
import AnimatedComponent from './AnimatedComponent';
import { lazy,Suspense } from 'react';

function Home() {
  const Footer = lazy(()=>import("./Footer"));
  return (
    <div>
      <HeadBody/>
      <Suspense fallback={<h1>Loading...</h1>}>
      <AnimatedComponent>
        <Footer/>
      </AnimatedComponent>
      </Suspense>
    </div>
  )
}

export default Home
