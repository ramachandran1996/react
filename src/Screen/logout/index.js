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
        id:9,
        name:'Billing'
    },

]

const Iconcontainer = props => {
 return(
    <div className='Container_icon'>
    <div className='logo_style'>
        <img 
        alt={'hi'}
        src={require('./logo.png')}
        style={{ height: 36, width: 36 }}

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
     const modalclose = (value) =>{
         console.log('ramachandran',value);
         setIsmodelshow(false);
         if(isphonenumber.length>0 && value !=''){
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
      
   
       <div className='header_setting_container'>
          <div className='header_setting_content'>
                 <p style={{color:'#1B73E8',marginRight:10}}>Settings /</p> dialer
          </div>
           <div className='header_setting_bottom'>
              {isvisible && 
               <div className='left_bottom_container'>
            
             <div className='list_of_option_container'>
                      {settinglist.map((item,index)=>{
                          return (
                          <div className={'list_of_option'}
                          onClick={()=>{open_phonenumber_field(item.name)}}
                          
                          >
                              <div style={{backgroundColor:'white',padding:'5%',width:'100%',textAlign:"left",marginBottom:item.id=='9'?0:2,fontSize:16,fontFamily:'sans-serif'}}> {item.name}</div>
                             </div>
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
                          className='add_phone_number_container'
                        onClick={()=>{addphonenumber()}}   
                        >
                                 <p style={{color:'#1B73E8'}}>+ Add a phone number</p> 
                          </div>

                          {
                              isphonearray && isphonearray.length>0?
                              isphonearray.map((item)=>{
             return(
             <div
             
             className='add_phone_number_container'
            //  style={{backgroundColor:'red',display:'flex',flexDirection:'row',flexWrap:'wrap',height:100,width:'25%',marginTop:10,marginBottom:10,marginRight:5,paddingLeft:10,paddingRight:10,justifyContent:'center',alignItems:'center'}}
                     
                       >
                     <div className='add_phone_number_top_field'>
                         <div 
                         className='phone_icon_container'
                         >
                         <img 
                         alt={'call'}
                         src={require('./call-icon.svg')}
                         style={{width:20,height:20}}
                         />
                         </div>
                         <div 
                         className="phone_number_field_conatienr"
                         >
             <p style={{color:'#1B73E8',display:"contents"}}>{item.name}</p>
                             
                             </div>
                         <div 
                         className="star_conatiner"
                         >
                         <img 
                         alt={'star'}
                         src={require('./star.svg')}
                         style={{width:20,height:20,paddingLeft:20}}
                         />

                         </div>
                      </div>
                      <div 
                      className={'add_phone_number_bottom_field'}>
                      <div style={{width:'50%',height:20,}}>
                              ownnumber
                              </div>
                              <div>
                              <img 
                                  onClick={()=>{deletephonenumber(item.name)}}
                         src={require('./delete-icon.svg')}
                         style={{width:20,height:20}}
                         />
                              </div>
                      </div>
                       </div>
                     )
                              }):null
                          }
                      </div>
                     

                     <div className='phone_number_heading'>
                     <div className={'phone_number_content'}>Phone call credits</div>
                     <div
             
             className='add_phone_number_container'>

                 <div style={{   
                      width: '100%',
                      textAlign:'left',
                      display:'block',
                      height: 20,
                      marginBottom: 10,
                      marginTop: 6,
                      fontWeight:'lighter'
                      
                  
                      }}>Available</div>
                 <div style={{
     width: '100%',
    textAlign:'left',
    display:'block',
    height: 20,
    fontWeight:'lighter'
    // marginTop:-30
    }}>$100</div>

    <div>
       <p style={{color:'#1B73E8',display:'contents'}}> Buy more credits</p>
        </div>
                 </div>
                 
                         </div>
                 </div>
                 :null}
           </div>
            
       </div>
        
   {ismodelshow ?
        <div className='model_container'>
        <div className='modelwrapper'>
            <div style={{position:'relative',
            right:'0%',top:'1%',
            textAlign:'end',
            marginTop:-10,
    }}>
                <img 
                                  onClick={()=>{modalclose('')}}
                         src={require('./close_icon.svg')}
                         style={{width:20,height:20}}
                         />
            
                </div>
                  <div style={{padding:5,fontWeight:'bold',fontSize:22,textAlign:'left'}}>
                      Add your number
                  </div>
                  <div style={{padding:5,marginBottom:20,textAlign:'left'}}>
                      Enter your number
                  </div>
                  <input
                  style={{marginBottom:5,outline:'none',borderWidth:0,borderBottomWidth:0.5,marginLeft:6,marginRight:6}}
                  type="text" 
                  value={isphonenumber} 
                  name={'firstname'}
                  onChange={handlephonenumber}
                   />
                       <div style={{padding:5,marginBottom:5,textAlign:'left'}}>
                      Well call you to enter a verification code
                  </div>
    <div className={'model_bottom_container'}>
     <div style={{width:100,backgroundColor:'whitesmoke',marginRight:5,borderRadius:5,height:20,cursor:'pointer',padding:5}}
     onClick={()=>{modalclose()}}
     >Back</div>
     <div  style={{width:100,backgroundColor:'#1B73E8',borderRadius:5,height:20,padding:5}}>Call me</div>
    </div>
                          </div>
                      </div>
     :null}
       
    







       <button
       style={{width:'20%',justifyContent:'center',marginLeft:20,marginTop:10}}
        onClick={() => {
            auth.logout(() => {
                props.history.push("/");
              });
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default AppLayout