import './styles/header.css'

const Header = () =>
{
    return <header>
        <TopNavBar />
        <TopSubjectBar />
    </header>
}


function TopNavBar()
{
    return <div className='topNavBar'>
        <div className='left-items'>
            <img id="w3-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/512px-W3Schools_logo.svg.png" alt='W3' className='logo' />
            <div className='nav-links'>
                <li>
                    <a>Tutorials </a>
                    <i className='custom-caret' />
                </li>
                <li>
                    <a>Exercises </a>
                    <i className='custom-caret' />
                </li>
                <li>
                    <a>Certificates </a>
                    <i className='custom-caret' />
                </li>
                <li>
                    <a>Services </a>
                    <i className='custom-caret' />
                </li>
            </div>
            <form className='search-form'>
                <input type='text' placeholder='Search...' className='search-input' />
                <button type='submit' className='search-button'><img id='search-button-img' src='https://static.thenounproject.com/png/358016-200.png' className='search-button-img' /></button>
            </form>
        </div>
        <div className='right-items'>
            <button onClick={() => { }} className='button-spaces'>
                Spaces
            </button>
            <button onClick={() => { }} className='button-spaces'>
                Get Certified
            </button>

            <button onClick={() => { }} className='button-spaces'>Sign Up</button>
            <button onClick={() => { }} className='button-spaces'>Log In</button>
        </div>
    </div >
}

function TopSubjectBar()
{
    return <div className='topSubjectBar'>
        <li>
            <a href='www.google.com'>HTML</a>
        </li>
        <li>
            <a href='www.google.com'>CSS</a>
        </li>
        <li>
            <a href='www.google.com'>JAVASCRIPT</a>
        </li>
    </div>
}

export default Header;