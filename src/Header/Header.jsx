
import './Header.css';

function Header({ handleOpen }) {
    return (
        <div className="Header">
            <div className="logo">
                <h3 className="logo">
                    <span>Up</span>meets
                </h3>
            </div>
            <nav className="navbar">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Support</a>
                <a href="">Blog</a>
                <a href="">Notes</a>
            </nav>
            <button onClick={handleOpen} className='createBtn'>+</button>
        </div>
    );
}

export default Header;


