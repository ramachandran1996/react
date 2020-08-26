import React from 'react';
import auth from '../Router/auth';
import './App.scss';

const Header = props => {
  return (
    
     <div className='Container'>
           <div className='Header'>
             <div className='header_left_content'>
               Engage
             </div>
             <div className='header_left_content1'>
                <div className='Prcing_tag'>pricing</div> 
                <div className='Request_demo' onClick={()=>{}}>
                    Request Demo
                </div>
             </div>
           </div>
            <div className='Body'> 
              <div className='content_wrapper'>
                  <div className='content_container'>
                   Ready to grow your business?
                 </div>
               </div>
               <div className={'login_wrapper'}>
               <div className='login_container'>
               <div className={'label'}>login</div>
                   <div className={'label'}>Firstname</div>
                   <input type="text" className={'firstname_field'}  onChange={()=>{}} />
                   <div className={'label'} >Lastname</div>
                   <input type="text" className={'firstname_field'}  onChange={()=>{}} />
                    <br></br>
                 
                   <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      > 
      Login
      </button> 
               </div>
               </div>
            </div>

     </div>
    
  
  )
}

export default Header;