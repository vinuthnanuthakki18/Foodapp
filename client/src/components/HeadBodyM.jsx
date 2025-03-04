
import AnimatedComponent from './AnimatedComponent';
import { lazy,Suspense } from 'react';

function HeadBodyM() {
    const ChainPics = lazy(()=>import("./ChainPics"));
    const PlaystoreBanner = lazy(()=>import("./PlaystoreBanner"));
    const OfferBanner = lazy(()=>import("./OfferBanner"));
    const Offers = lazy(()=>import("./Offers"));
  return (
    <div className="w-full overflow-hidden relative bg-gray-100">
        <Suspense fallback={<div>Loading....</div>}>
            <AnimatedComponent>
                <ChainPics/>
                <PlaystoreBanner/>
                <OfferBanner/>
                <Offers/>
            </AnimatedComponent>
        </Suspense>
    </div>
  )
}

export default HeadBodyM
