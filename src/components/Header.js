import '../style/header.css'
import Troll from '../images/Troll Face.png'
export default function Header() {
    return (
        <nav className="flex flex-row justify-between items-center">
            <div className='logo flex flex-row gap-2 items-center ml-2'>
                <img src={Troll} alt='Troll Face' />
                <h2>MemeGenerator</h2>
            </div>
            <div className='Nav-link flex flex-row gap-1 mr-2'>
                <h4>React Course</h4>
                <h4>- Project 3</h4>
            </div>
        </nav>
    )
}