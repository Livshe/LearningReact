import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Clock from './ClockClassExample'
// import ClockF from './ClockFunctionExample';
// import Football from './FootballExample';
// import HookExample from './HookExample';
// import UnControlledComponent from './UncontrolledComponentExample';
// import Validate from './ValidationExample';
import ClassActivity8 from './ClassActivity8';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
//   }
//   const user = {firstName: 'Harper',lastName: 'Perez'
//   };
//   //const element = (<div>{getGreeting(user)}</div>);


// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, { formatName(user)}!</h1>;}
//     return <h1>Hello, Stranger.</h1>;}

// root.render(
//   element
//   );  

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {...}
//     this.customFunction = this.customFunction.bind(this);
//   }}
//   export default Example;

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }}

root.render(
  <div>
  {/* <Car />
  <Clock />
  <ClockF date={new Date()}/> */}
  {/* <Football/>
  <HookExample/>
  <UnControlledComponent/>
  <Validate/> */}
  <ClassActivity8/>
  </div>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
