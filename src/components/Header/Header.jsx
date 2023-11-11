import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <p style={{fontSize: "xxx-large"}}>ЛОГО<span style={{fontSize: "small"}}>или название</span></p>
                <nav>
                    <a href="#">Яколь 1</a>
                    <a href="#">Яколь 2</a>
                    <a href="#">Яколь 3</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;