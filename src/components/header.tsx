
import nlwUniteIcon from '../assets/unite-icon.svg'
import { NavLink } from './nav-link'

export function Header () {

    return (


 <div   className="flex items-center gap-5 py-2  ">

   <img src={nlwUniteIcon} alt='Unite Icon'/>

   <nav className="flex items-center gap-5">
        <NavLink href="/event">Event</NavLink>
        <NavLink href="/participant">Participants</NavLink>
      </nav>
   

</div>

)
}