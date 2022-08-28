import React, { Component } from "react";
import data from "./dataGlasses.json";
export default class BtThuKinh extends Component {
  state = {
    glassesShow: {
      url: "./glassesImage/v1.png",
      name: "GUCCI G8850U",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundrepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row pt-4">
            <div className="col-6">
              <div className="card mr-5 text-white">
                <img src="./glassesImage/model.jpg" alt="..." />
                <img
                  style={{
                    opacity: "0.5",
                    position: "absolute",
                    left: "90px",
                    top: "150px",
                  }}
                  width={300}
                  src={this.state.glassesShow.url}
                  alt="..."
                />
                <div
                  className="card-body bg-warning"
                  style={{
                    opacity: "0.5",
                    position: "absolute",
                    bottom: "0px",
                  }}
                >
                  <h4>{this.state.glassesShow.name}</h4>
                  <p>{this.state.glassesShow.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card ml-5 text-white bg-warning">
                <img src="./glassesImage/model.jpg" alt="..." />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {data.map((glasses) => {
              return (
                <div
                  className="col-4"
                  key={glasses.id}
                  onClick={() => {
                    this.setState({ glassesShow: glasses });
                  }}
                >
                  <div className="card">
                    <img className="card-img-top" src={glasses.url} alt="..." />
                    <div className="card-body">
                      <p className=" text-center">{glasses.name}</p>
                      <p>{glasses.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
