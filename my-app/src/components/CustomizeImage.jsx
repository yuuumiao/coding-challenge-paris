import React, { Component } from 'react'

export default class CustomizeImage extends Component {
    state={
        size: 100,
        url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-silver-select-202011?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1603406899000',
    }


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    render() {
        return (
            <div>
            <h2>Customize Image</h2>

            <img src={this.state.url} alt="img" style={{
                width: `${this.state.size}px`
            }}></img>

            <br/>
            
            <input type="text" name="url" value={this.state.url} onChange={this.handleChange}/>
            <br/>
            <input type="range" name="size" min="0" max="200" value={this.state.size} onChange={this.handleChange}></input>
            <br/>
            <p>{this.state.size} x {this.state.size} px </p>

            </div>
        )
    }
}

