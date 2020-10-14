import React from 'react'
import './ImageLinkForm.css'




const Rank = ({name, entries}) => {
    
    return(
        <div>
            <div className='f2 white'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white  f1'>
                {entries}
            </div>
        </div>
    )
}
export default Rank;