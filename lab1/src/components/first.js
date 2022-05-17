import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class first extends React.Component {
    constructor(){
        super()
        this.state={
            data:""
        }
    }
    clear=()=>{
        this.setState({
            data:""
        })
    }
    render() {
        return (
            <div class="container p-5">
                <input type="text" class="form-control"
                value={this.state.data}
                    onChange={(e)=>{
                        this.setState({
                            data:e.target.value
                        })
                    }}
                />
                {this.state.data}
                <div class="col-12 pt-4 text-center">
                    <button type="button" class="btn btn-warning" onClick={this.clear}>Clear</button>
                </div>
            </div>
        )
    }
}