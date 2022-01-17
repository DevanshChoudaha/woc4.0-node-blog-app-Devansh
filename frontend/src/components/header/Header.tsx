import React from 'react';
import './header.css';


type HeaderProp = {

}

class Header extends React.Component <{}> {
    render(): React.ReactNode {
        return (
            <div className='header'>
                <div className="headerTitles">
                    <span className='headerTitleSmall'>React and Node</span>
                    <span className='headerTitleLarge'>Blog</span>
                </div>

                <img 
                    className='headerImg'
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" />
            </div>
        )
    }
}

export default Header;