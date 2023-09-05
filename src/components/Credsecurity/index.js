import React from 'react';
import './credsec.css';
import Button from '../common/Button';

const index = () => {
  return (
    <div className="cred-sec photo-section">
      <div className="max-width">
        <div className='photo-section-child'>
        <div className='photo-section-top'>
        <div className='photo-section-heading'>
        security first. and second. 
        </div>
        <div className='photo-section-subheading'>
        what’s yours remains only yours.
        </div>
        <div className='photo-section-bottom'>
            <div className='photo-section-des'>
            CRED ensures that all your personal data and transactions
             are encrypted, and secured so what’s yours remains only yours.
             there’s no room for mistakes because we didn’t leave any.
            </div>
        </div>
        <Button buttonText='Become a member' />
       </div>
      </div>
      </div>
    </div>
  )
}

export default index
