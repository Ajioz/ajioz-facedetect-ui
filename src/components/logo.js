import React from 'react'
import Tilt from 'react-tilt'
import logo from './logo.png'


const Logo = () => {
    
    return(
        <div className='ma4 nt4'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '12px'}}alt = 'logo' src={logo}></img>
                </div>
            </Tilt>

        </div>
    )
}
export default Logo