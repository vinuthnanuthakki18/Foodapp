import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
<>
    <div className="w-full h-[500px] bg-gray-800 flex justify-evenly items-center text-gray-300">
        <div className="foot bg-gray-700 p-4 w-[250px] h-[400px] rounded-md shadow-slate-800">
            <p className="font-bold">Discover Deliveroo</p>
            <p>Investors</p>
            <p>About us</p>
            <p>Takeaway</p>
            <p>More</p>
            <p>Newsroom</p>
            <p>Engineering blog</p>
            <p>Design blog</p>
            <p>Gift Cards</p>
            <p>Deliveroo Students</p>
            <p>Careers</p>
            <p>Restaurant signup</p>
            <p>Become a rider</p>
        </div>
        <div className="foot bg-gray-700 p-4 w-[250px] h-[400px] rounded-md shadow-slate-800">
            <p className="font-bold">Legal</p>
            <p>Terms and conditions</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Modern Slavery Statement</p>
            <p>Tax Strategy</p>
            <p>Section 172 Statement</p>
            <p>Public Authority Requests</p>
        </div>
        <div className="foot bg-gray-700 p-4 w-[250px] h-[400px] rounded-md shadow-slate-800">
            <p className="font-bold">Help</p>
            <p>Contact</p>
            <p>FAQs</p>
            <p>Cuisines</p>
            <p>Brands</p>
        </div>
        <div className="foot bg-gray-700 p-4 w-[250px] h-[400px] rounded-md shadow-slate-800 flex flex-col gap-4 items-center">
            <p className="font-bold">Take biteXpress with you</p>
            <button className="font-bold bg-gray-900 p-4 rounded w-[150px]">Google Play</button>
            <button className="font-bold bg-gray-900 p-4 rounded w-[150px]">Apple Play</button>
        </div>
    </div>
    <div className="footer w-full h-[50px] bg-gray-800 flex justify-center items-center text-gray-300">
        <p className='p-4'>© 2025 Nuthakki Vinuthna</p>
        <FacebookIcon/>
        <XIcon/>
        <InstagramIcon/>
    </div>
</>
  )
}

export default Footer
