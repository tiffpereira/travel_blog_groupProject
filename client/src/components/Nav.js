import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='Nav-bar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/posts'}>Posts</Link>
        </nav>  
    )
}

export default Nav 