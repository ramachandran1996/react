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

const Iconcontainer = props => {
 return(
    <div className='Container_icon'>
    <div className='logo_style'>
        <img 
        alt={'hi'}
        src={require('./chart_icon.svg')}
        style={{ height: 50, width: 36 }}

        />
    </div>
{props.children}         
</div>
 )
}


const AppLayout1 = props => {

    const [isvisible, setIsvisible] = useState(false);
    const [isvisiblesettings, setIsvisiblesettings] = useState('');
    const [ismodelshow, setIsmodelshow] = useState(false);
    const [isphonenumber, setIsphonenumber] = useState('');
    const [ isphonearray,setIsphonearray]=useState([])
    const [isphonecontainer, setIsphonecontainer] = useState(false);
 
    const handlephonenumber = e => {
    setIsphonenumber(e.target.value);
   

      };

    const deletephonenumber = (phonenumber) => {
   
       let copyarray = isphonearray;
        let newarray = copyarray.filter(item => {
            return item.name != phonenumber
          });
        setIsphonearray(newarray);  
    }
     const addphonenumber = () =>{
     setIsmodelshow(true);
     } 
     const modalclose = () =>{
         setIsmodelshow(false);
         if(isphonenumber.length>0){
         isphonearray.push(
            {
                id:isphonearray.length +1,
                name:isphonenumber
            }
           )  
           setIsphonearray(isphonearray)
           console.log('ram',isphonearray)
        }
         setIsphonenumber('');

     }

     const handleChange = (item) =>{
        // alert(item.icon);
        setIsvisible(!isvisible);
        setIsvisiblesettings(item.icon)
      }
      const open_phonenumber_field = (name)=>{
              if(name=='Dialer')
              {
               setIsphonecontainer(true)
              }
      }

  return (
    <div className={'logout_container'}>
      {/* <h1>App Layout</h1> */}

      <Iconcontainer>
      {App.map((item,index)=>{
          return(
       <img alt={item.icon} src={item.path}
        className={item.icon == isvisiblesettings && isvisible?'Icon_padding':'Icon'}
        onClick={()=>{handleChange(item)}}
       />
          )
      }) }
     </Iconcontainer>
        {/* <div className='Container_icon'>
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
                
       </div> */}


   
       <div className='header_setting_container'>
          <div className='header_setting_content'>
                  Settings dialer
          </div>
           <div className='header_setting_bottom'>
              {isvisible && 
               <div className='left_bottom_container'>
            
             <div className='list_of_option_container'>
                      {settinglist.map((item,index)=>{
                          return (
                          <div className={'list_of_option'}
                          onClick={()=>{open_phonenumber_field(item.name)}}
                          
                          >{item.name}</div>
                          )
                      })
                           
                      }
                             
                      
                </div>

                 </div>

                  } 
              {isphonecontainer? 
                <div className='right_bottom_container'>
                      <div className={'phone_number_heading'}>
                          <div className={'phone_number_content'}>My phone number</div>
                          <div 
                          className='phonenumber_container'
                        onClick={()=>{addphonenumber()}}   
                        >
                                  + Add a phone number
                          </div>

                          {
                              isphonearray && isphonearray.length>0?
                              isphonearray.map((item)=>{
             return(
             <div
             
             className='phonenumber_container'
                       onClick={()=>{deletephonenumber(item.name)}}
                       >
                           {item.name}
                       </div>
                     )
                              }):null
                          }
                      </div>
                     
                 </div>
                 :null}
           </div>
            
       </div>
        
   {ismodelshow ?
        <div className='model_container'>
        <div className='modelwrapper'>
                  <div style={{padding:5,fontWeight:'bold'}}>
                      Add your number
                  </div>
                  <div style={{padding:5,marginBottom:20}}>
                      Enter your number
                  </div>
                  <input
                  style={{marginBottom:50}}
                  type="text" 
                  value={isphonenumber} 
                  name={'firstname'}
                  onChange={handlephonenumber}
                   />
    <div className={'model_bottom_container'}>
     <div style={{width:120,backgroundColor:'red',marginRight:5,borderRadius:5,cursor:'pointer'}}
     onClick={()=>{modalclose()}}
     >save</div>
     <div  style={{width:100,backgroundColor:'red',borderRadius:5}}>call me</div>
    </div>
                          </div>
                      </div>
     :null}
       
    







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
export default import React,{useState, useEffect} from "react";
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

const Iconcontainer = props => {
 return(
    <div className='Container_icon'>
    <div className='logo_style'>
        <img 
        alt={'hi'}
        src={require('./chart_icon.svg')}
        style={{ height: 50, width: 36 }}

        />
    </div>
{props.children}         
</div>
 )
}


const AppLayout = props => {

    const [isvisible, setIsvisible] = useState(false);
    const [isvisiblesettings, setIsvisiblesettings] = useState('');
    const [ismodelshow, setIsmodelshow] = useState(false);
    const [isphonenumber, setIsphonenumber] = useState('');
    const [ isphonearray,setIsphonearray]=useState([])
    const [isphonecontainer, setIsphonecontainer] = useState(false);
 
    const handlephonenumber = e => {
    setIsphonenumber(e.target.value);
   

      };

    const deletephonenumber = (phonenumber) => {
   
       let copyarray = isphonearray;
        let newarray = copyarray.filter(item => {
            return item.name != phonenumber
          });
        setIsphonearray(newarray);  
    }
     const addphonenumber = () =>{
     setIsmodelshow(true);
     } 
     const modalclose = () =>{
         setIsmodelshow(false);
         if(isphonenumber.length>0){
         isphonearray.push(
            {
                id:isphonearray.length +1,
                name:isphonenumber
            }
           )  
           setIsphonearray(isphonearray)
           console.log('ram',isphonearray)
        }
         setIsphonenumber('');

     }

     const handleChange = (item) =>{
        // alert(item.icon);
        setIsvisible(!isvisible);
        setIsvisiblesettings(item.icon)
      }
      const open_phonenumber_field = (name)=>{
              if(name=='Dialer')
              {
               setIsphonecontainer(true)
              }
      }

  return (
    <div className={'logout_container'}>
      {/* <h1>App Layout</h1> */}

      <Iconcontainer>
      {App.map((item,index)=>{
          return(
       <img alt={item.icon} src={item.path}
        className={item.icon == isvisiblesettings && isvisible?'Icon_padding':'Icon'}
        onClick={()=>{handleChange(item)}}
       />
          )
      }) }
     </Iconcontainer>
        {/* <div className='Container_icon'>
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
                
       </div> */}


   
       <div className='header_setting_container'>
          <div className='header_setting_content'>
                  Settings dialer
          </div>
           <div className='header_setting_bottom'>
              {isvisible && 
               <div className='left_bottom_container'>
            
             <div className='list_of_option_container'>
                      {settinglist.map((item,index)=>{
                          return (
                          <div className={'list_of_option'}
                          onClick={()=>{open_phonenumber_field(item.name)}}
                          
                          >{item.name}</div>
                          )
                      })
                           
                      }
                             
                      
                </div>

                 </div>

                  } 
              {isphonecontainer? 
                <div className='right_bottom_container'>
                      <div className={'phone_number_heading'}>
                          <div className={'phone_number_content'}>My phone number</div>
                          <div 
                          className='phonenumber_container'
                        onClick={()=>{addphonenumber()}}   
                        >
                                  + Add a phone number
                          </div>

                          {
                              isphonearray && isphonearray.length>0?
                              isphonearray.map((item)=>{
             return(
             <div
             
             className='phonenumber_container'
                       onClick={()=>{deletephonenumber(item.name)}}
                       >
                           {item.name}
                       </div>
                     )
                              }):null
                          }
                      </div>
                     
                 </div>
                 :null}
           </div>
            
       </div>
        
   {ismodelshow ?
        <div className='model_container'>
        <div className='modelwrapper'>
                  <div style={{padding:5,fontWeight:'bold'}}>
                      Add your number
                  </div>
                  <div style={{padding:5,marginBottom:20}}>
                      Enter your number
                  </div>
                  <input
                  style={{marginBottom:50}}
                  type="text" 
                  value={isphonenumber} 
                  name={'firstname'}
                  onChange={handlephonenumber}
                   />
    <div className={'model_bottom_container'}>
     <div style={{width:120,backgroundColor:'red',marginRight:5,borderRadius:5,cursor:'pointer'}}
     onClick={()=>{modalclose()}}
     >save</div>
     <div  style={{width:100,backgroundColor:'red',borderRadius:5}}>call me</div>
    </div>
                          </div>
                      </div>
     :null}
       
    







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
export default AppLayout;