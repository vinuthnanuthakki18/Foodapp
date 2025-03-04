
import Head from './Head'
// import Products from './Products'
import Searchup from './Searchup';
import {lazy, Suspense} from 'react';
import {BounceLoader} from 'react-spinners';
function Base() {
  const Products = lazy(()=>import('./Products'));
  return (
    <div>
      <Head/>
      <Searchup/>
      <Suspense fallback={<BounceLoader color="#f97316" />}>
        <Products/>
      </Suspense>
    </div>
  )
}

export default Base
