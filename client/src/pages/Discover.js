import React from "react";
import ProgressLanding from "../components/ProgressLanding";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import API from "../utils/API";
// import axios from "axios";
// import "../App.css";

function Discover() {
  return (
    <div>
      <ProgressLanding>      
      </ProgressLanding>
    </div>
  );
}

// function Discover() {
// class Discover extends Component {
//   state = {
//     image: "",
//     match: false,
//     matchCount: 0
//   };

//   // When the component mounts, load the next dog to be displayed
//   componentDidMount() {
//     this.loadNextDog();
//   }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
// ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextDog();
//   };

//   loadNextDog = () => {
//     API.getRandomDog()
//       .then(res =>
//         this.setState({
//           image: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };

// function Discover() {
//   return (
//     <DiscoverCarousel />

// WORKING ON SWIPE RIGHT //

// const data = ['Alexandre', 'Thomas', 'Lucien']

// const Wrapper = () => {
//   return (
// 	  <Cards onEnd={action('end')} className='master-root'>
//         {data.map(item =>
//           <Card
//             onSwipeLeft={action('swipe left')}
//             onSwipeRight={action('swipe right')}>
//             <h2>{item}</h2>
//           </Card>
//         )}
//       </Cards>
//   )
// }
//   );
// }

export default Discover;
