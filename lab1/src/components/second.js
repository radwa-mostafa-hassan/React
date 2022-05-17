import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default class Slider extends React.Component {
    images = ["./Images/1.jpg",
        "./Images/2.jpg",
        "./Images/3.jpg",
        "./Images/4.jpg",
        "./Images/5.jpg"
    ];
    index = 0;
    myInterval = null;
    constructor() {
        super()
        this.state = {
            image: "./Images/1.jpg",
        }
    }
    next = () => {
        if (this.index < this.images.length - 1) {
            this.index++;
            this.setState({
                image: this.images[this.index]
            })
            clearInterval(this.myInterval)
        }
    }
    prev = () => {
        if (this.index > 0) {
            this.index--;
            this.setState({
                image: this.images[this.index]
            })
            clearInterval(this.myInterval)
        }
    }
    change = () => {
        if (this.index < this.images.length - 1) {
            this.index++;
            this.setState({
                image: this.images[this.index]
            })
        }
        else {
            this.index = 0;
            this.setState({
                img: this.images[this.index]
            })
        }
    }
    slide=()=>{
        this.myInterval = setInterval(this.change, 1000);
    }

    stop=()=>{
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div class="container">
                {/* Images */}
                <div class="row" >
                    <img src={this.state.image} alt="slider" style={{height: '500px'}}/>
                </div>
                {/* Buttons */}
                <div class="row pt-4 text-center">
                    <div class="col-3">
                        <button type="button" class="btn btn-primary" onClick={this.next}>Next</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-secondary" onClick={this.prev}>Previous</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-success" onClick={this.slide}>Slide</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-danger"onClick={this.stop}>Stop</button>
                    </div>
                </div>
            </div>
        )
    }
}

