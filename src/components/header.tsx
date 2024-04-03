
//import { NavLink } from "./nav-link"
import nlwUniteIcon from '../assets/unite-icon.svg'

export function Header () {

    return (
 <div   className="flex items-center gap-5 py-2  ">

   <img src={nlwUniteIcon} alt='Unite Icon'/>

   <nav className=' flex items-center gap-5'>
    <a href="" className=' font-medium text-sm text-zinc-300'> Events</a>
    <a href="" className=' font-medium text-sm'>Participants</a>
   </nav>

</div>

)
}