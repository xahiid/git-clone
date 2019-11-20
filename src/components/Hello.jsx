import React, { Component } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Main from './Main'
import Footer from './Footer'
export default class Hello extends Component {
  state = {
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4" ,
    list: ['Overview',
'Repositories', 
'Projects',
'Stars',
'Followers',
'Following']
};
handleCh=()=>{
  console.log(this.state.list)
}
  render() {
    return (
<<<<<<< HEAD
      <div className="container1">
        <div className="header">
          <NavBar />
        </div>
        <div className="sidebar">
          {" "}
          <img className="img_welcome" src={this.state.avatar_url} />
          <h2 className="h2_imgName"> Tom Prestor Wernor</h2>
          <h5 style={{ color: "grey" }}>mojombo</h5>
          <button className='btn1'>
            Follow
          </button>
          <p style={{margin:'0px'}}> San Francisco</p> 
          <p style={{ margin: '0px' }}><Link> tom@mojombo.com</Link> </p>
          <p> <Link> http://tom.preston-werner.com  </Link></p>
          <p>* 
            <span style={{ marginLeft: '15px',background:'purple',padding:'4px',color:'white' }}>
              PRO
              </span></p>
          <p style={{fontSize: '12px' }}>Block or report user</p>
          <hr/>
        </div>
        <div className="main"><Main/></div>
        <div className="footer"><Footer/></div>
      </div>
=======
    
        <div className="container1">
          
            <div className="header1">Welcome</div>

            <div className="sidebar">sidebar</div>
            <div className="main">main</div>
            <div className="footer">footer</div>
          

     </div>
>>>>>>> d76eccbc5ba5e48f6ec30e50ef01b2ee1605ecb2
    );
  }
}
