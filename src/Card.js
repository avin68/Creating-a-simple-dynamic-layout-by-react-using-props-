import "./Card.css";
import Button from "./Button";
import React from "react";

// function Card(props){
//     return(
//       <div className="col">
//       <div className="card">
//         <img className="card-image" src={props.shoePic} alt="" />
//         <div className="card-body">
//           <h5 className="card-title">{props.shoeName}</h5>
//           <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi aliquam nesciunt, perferendis tenetur incidunt odit.</p>
//           <Button />
//         </div>
//       </div>
//     </div>
//     )
//   }

// function Card({shoeName , shoePic = "./images/05.jpg"}){
//     return(
//       <div className="col">
//       <div className="card">
//         <img className="card-image" src={shoePic} alt="" />
//         <div className="card-body">
//           <h5 className="card-title">{shoeName}</h5>
//           <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi aliquam nesciunt, perferendis tenetur incidunt odit.</p>
//           <Button />
//         </div>
//       </div>
//     </div>
//     )
//   }

class Card extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="card">
          <img className="card-image" src={this.props.shoePic} alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.shoeName}</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              aliquam nesciunt, perferendis tenetur incidunt odit.
            </p>
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  shoePic: "./images/04.png",
};

export default Card;
