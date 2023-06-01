import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useEffect } from 'react';
import {connect} from "react-redux";
import {getUserAuth} from "./actions"
import Login from "./components/Login"
import Home from "./components/Home"
import Header from './components/Header';

function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path="/home" element={
            <div>
              <Header></Header>
              <Home></Home>
              </div>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps= (state) =>{
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  getUserAuth:() => dispatch(getUserAuth()),

});
export default connect(mapStateToProps,mapDispatchToProps)(App);


