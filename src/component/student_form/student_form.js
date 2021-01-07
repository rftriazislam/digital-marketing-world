import React from 'react';

class From extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
         <div  style={{height:"600px",border: "1px solid red",margin:"5% 10% 5%",marginRight:"10%" }}>
         <h1 >React Form </h1>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} style={{color: "red",width:"200px"}} />
                <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} style={{color: "red",width:"200px"}} />
                <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} style={{color: "red",width:"200px"}} />
                <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} style={{color: "red",width:"200px"}} />
            <h4>{this.state.data}</h4>
         </div>
            
         </div>
      );
   }
}
export default From;