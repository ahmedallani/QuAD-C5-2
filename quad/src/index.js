import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import './index.css';
import FreeLancerList from './components/company/Home/Posts/FreeLancerList.js'
import AddPost from './components/company/Home/AddPost.js'
import Post from './components/company/Home/Posts/Post.js'
// import Post from './components/company/Home/Posts/Post.js'
// import CompanySection from './components/company/CompanySection.js';

ReactDOM.render(<AddPost/>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );