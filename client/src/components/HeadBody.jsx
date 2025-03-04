import HeadBodyM from './HeadBodyM'
import Header from './Header'
import TopHome from './TopHome';

function HeadBody() {
  return (
<>
    <div className='w-100 h-[550px] relative' style={{ backgroundImage: "url('/hero.jpeg')", backgroundSize: 'cover'}}>
        <Header/>
        <TopHome/>
    </div>
        <HeadBodyM/>


</>
  )
}

export default HeadBody
