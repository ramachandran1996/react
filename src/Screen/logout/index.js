import React,{useState, useEffect} from "react";
import auth from "../../Router/auth";
import './App1.scss';
const App = [
  {
  id:1,
  icon:'send',
  path: require('./send_icon.svg')
  },
  {
    id:2,
    icon:'bookmark',
    path: require('./bookmarks_icon.svg')
  },
  {
      id:3,
      icon:'assignment',
      path: require('./assignment_icon.svg')
  },
  {
    id:4,
    icon:'assignment_click',
    path: require('./assignment_click_icon.svg')
},
{
    id:5,
    icon:'people',
    path: require('./people_icon.svg')
},
{
    id:6,
    icon:'graph',
    path: require('./chart_icon.svg')
},
{
    id:7,
    icon:'error',
    path: require('./error_outline_icon.svg')
},
{
    id:8,
    icon:'settings',
    path: require('./settings_icon.svg')
},
{
    id:9,
    icon:'error',
    path: require('./error_outline_icon.svg')
},
{
    id:10,
    icon:'error',
    path: require('./error_outline_icon.svg')
},
{
    id:10,
    icon:'error',
    path: require('./error_outline_icon.svg')
}

]

const settinglist = [
    {
        id:1,
        name:'My profile'
    },
    {
        id:2,
        name:'Connected inbox'
    },
    {
        id:3,
        name:'unsubscriber'
    },
    {
        id:4,
        name:'Signature'
    },
    {
        id:5,
        name:'Signature'
    },
    {
        id:6,
        name:'Crm integration',
    },
    {
        id:7,
        name:'Dialer',
    },
    {
        id:8,
        name:'Autobox'
    },
    {
        id:8,
        name:'Billing'
    },

]

const AppLayout = props => {

    const [isvisible, setIsvisible] = useState(false);
    const [isvisiblesettings, setIsvisiblesettings] = useState('');
    // useEffect(() => {
    //     console.log('useEffect has been called!');
    //     setIsvisible(isvisible);
    // },[isvisible]); 

  const sayHello = () =>
      { 
     alert('Hello!');
      }

     const addphonenumber = () =>{
         alert('hi');
     } 
     const handleChange = (item) =>{
        // alert(item.icon);
        setIsvisible(!isvisible);
        setIsvisiblesettings(item.icon)
      }
  return (
    <div className={'logout_container'}>
      {/* <h1>App Layout</h1> */}
       <div className='Container_icon'>
           <div className='logo_style'>
               <img 
               alt={'hi'}
               src={require('./chart_icon.svg')}
               style={{ height: 50, width: 36 }}
 
               />
           </div>
      {App.map((item,index)=>{
          return(
       <img alt={item.icon} src={item.path}
        className={item.icon == isvisiblesettings && isvisible?'Icon_padding':'Icon'}
        onClick={()=>{handleChange(item)}}
       />
          )
      }) }
                
       </div>


   
       <div className='header_setting_container'>
          <div className='header_setting_content'>
                  Settings dialer
          </div>
           <div className='header_setting_bottom'>
              {isvisible &&  <div className='left_bottom_container'>
            
             <div className='list_of_option_container'>
                      {settinglist.map((item,index)=>{
                          return (
                          <div className={'list_of_option'}>{item.name}</div>
                          )
                      })
                           
                      }
                             
                      
                </div>

                 </div>

    } 
                 <div className='right_bottom_container'>
                      <div className={'phone_number_heading'}>
                          <div style={{width:'100%',textAlign:'start',padding:0,margin:0,justifyContent:'center',height:20}}>hi</div>
                          <div style={{backgroundColor:'green',width:'40%',height:100,borderRadius:10,overflow:'hidden',justifyContent:'center',alignItems:'center',
                          display:'flex',
                        // boxShadow: 1, 3, 1, 'red',
                        cursor:'pointer',
                    marginTop:-30
                        }}
                        onClick={()=>{addphonenumber()}}
                        
                        >
                                  + Add a phone number
                          </div>
                      </div>
                     
                 </div>
           </div>
            
       </div>
     

        {/* <div className='button_conatier'>
          <button onClick={()=>{sayHello()}}>
        Click me
      </button> */}
    







      {/* <button
        onClick={() => {
            auth.logout(() => {
                props.history.push("/");
              });
        }}
      >
        Logout
      </button>
      </div> */}
    </div>
  );
};
export default AppLayout