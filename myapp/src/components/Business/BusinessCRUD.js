// // //编辑页面 放CRUD


// import React from 'react';
// // import {Link} from 'react-router-dom';

// const PUBLIC_URL = process.env.PUBLIC_URL;

// export default function BusinessCRUD (business) {
//     return(
//         constructor(props){
//             super(props);
//             this.state = {value: 'coconut'};//啥？？？
        
//             this.handleChange = this.handleChange.bind(this);
//             this.handleSubmit = this.handleSubmit.bind(this);
//         }
//           handleChange(event) {
//             this.setState({value: event.target.value});
//           }
        
//           handleSubmit(event) {
//             alert('State' + this.state.value);
//             event.preventDefault();
//           }
//           render(){
//               return(
//                 <form onSubmit={this.handleSubmit}>
//             <label>
//               Choose your state
//               <select value={this.state.value} onChange={this.handleChange}>
//                 <option value="gg">NSW</option>
//                 <option value="rn">VIC</option>
//                 <option value="tb">QLD</option>
//                 <option value="fb">WA</option>
//                 <option value="gg">TAS</option>
//                 <option value="rn">SA</option>
//                 <option value="tb">ACT</option>
//                 <option value="fb">NT</option>
//               </select>
//             </label>
//             <input type="submit" value="提交" />
//           </form>
//               )
//           }

//     )  
    
// }
