import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Card({data}){
  const {title, pins, mainImg, subImg1, subImg2} = data;
  return(
<div className="card border border-dark">
 <div className="title"><h4>{title}</h4></div>
 <div>Aviation Explorer</div>
 <div className='images'>
   <img className='main' src={mainImg} alt="main"/>
   <img className='sub1'src={subImg1} alt="sub1"/>
   <img className="sub2" src={subImg2} alt="sub2"/>
 </div>
 <div className='pin-count-box'>
  <span className="glyphicon glyphicon-pushpin"></span>
  <span className='pin-count'>{pins}</span>
 </div>
 <button className=' btn btn-primary follow-btn'>Follow</button>
</div>
);
}

Card.PropTypes = {
data: PropTypes.shape({
 id:PropTypes.number.isRequired,
 title:PropTypes.string.isRequired,
 pins:PropTypes.number.isRequired,
 mainImg:PropTypes.string.isRequired,
 subImg1:PropTypes.string.isRequired,
 subImg2:PropTypes.string.isRequired

}).isRequired
}

let cards = [{
  id: 1,
  title: "AVIATION",
  pins: 641,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
},
{
  id: 2,
  title: "Exceptional Aviation",
  pins: 209,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
},
{
  id: 3,
  title: "Aerospace",
  pins: 1545,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
}];


function Board(){
return (
  <div className='board '>
  {cards.map((e)=>(<Card data={e} key={e.id}/>))}
  </div>);
}
ReactDOM.render(<Board />, document.querySelector('#root'));
