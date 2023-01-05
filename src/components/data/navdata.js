import {AiFillHome} from 'react-icons/ai'
import {SiApplemusic} from 'react-icons/si'
import {RiRadio2Fill} from 'react-icons/ri'
import {HiOutlineSquares2X2} from 'react-icons/hi2'
import {HiUser} from 'react-icons/hi'
import {IoLogIn} from 'react-icons/io5'

const Navdata = [
    {
        id: 'one',
        pix: <AiFillHome />
        
        ,
        path: "/",
        name:  "Home"
        
    }, 

    {
        id: 'two',
        pix: <SiApplemusic />
        ,
        path: "Likes_coll",
        name:  "My albumSongss"
    },
    {
        id: 'three',
        pix: <RiRadio2Fill />,
                // path: "Likes_coll",

        name:  "Radio"
    },
    {
        id: 'four',
        pix: <HiOutlineSquares2X2 />
,
        name:  "Music videos"
    },
    {
        id: 'five',
        pix: <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3864 0.557648H6.39444C6.08265 0.557648 5.78285 0.56964 5.49504 0.617608C2.4011 0.977368 0.398438 3.26784 0.398438 6.55365V14.9481C0.398438 18.5457 2.79684 20.9441 6.39444 20.9441H18.3864C21.9841 20.9441 24.3825 18.5457 24.3825 14.9481V6.55365C24.3825 2.95605 21.9841 0.557648 18.3864 0.557648ZM7.44974 13.7489C5.79484 13.7489 4.45174 12.4058 4.45174 10.7509C4.45174 9.09596 5.79484 7.75285 7.44974 7.75285C9.10464 7.75285 10.4477 9.09596 10.4477 10.7509C10.4477 12.4058 9.10464 13.7489 7.44974 13.7489ZM15.2445 14.0487H14.6449C14.1533 14.0487 13.7455 13.6409 13.7455 13.1493C13.7455 12.6576 14.1533 12.2499 14.6449 12.2499H15.2445C15.7362 12.2499 16.1439 12.6576 16.1439 13.1493C16.1439 13.6409 15.7362 14.0487 15.2445 14.0487ZM19.4417 14.0487H18.8421C18.3505 14.0487 17.9427 13.6409 17.9427 13.1493C17.9427 12.6576 18.3505 12.2499 18.8421 12.2499H19.4417C19.9334 12.2499 20.3411 12.6576 20.3411 13.1493C20.3411 13.6409 19.9334 14.0487 19.4417 14.0487ZM19.4417 9.25185H14.6449C14.1533 9.25185 13.7455 8.84413 13.7455 8.35245C13.7455 7.86078 14.1533 7.45305 14.6449 7.45305H19.4417C19.9334 7.45305 20.3411 7.86078 20.3411 8.35245C20.3411 8.84413 19.9334 9.25185 19.4417 9.25185Z" fill="#EFEEE0" fillOpacity="0.25"/>
</svg>
,
        name:  "Profile"
    },
    {
        id: 'six',
        pix: <HiUser />
,
        name:  "user"
    },
    {
        id: 'seven',
        pix: <IoLogIn />
,
        name:  "login"
    },
]

export default Navdata