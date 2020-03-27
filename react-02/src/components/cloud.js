import React from 'react';

class CloudSVG extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "#FFF",
        }
    }
    clickChange = () => {
        let tempChange = ""
        if(this.state.color === "#FFF"){
            tempChange = "#000";
        } else {
            tempChange = "#FFF";
        }
        this.setState({
            color: tempChange,
        })

    }

    render() {
        return (
            <svg 
                onClick={this.clickChange}
                width={this.props.width} 
                height={this.props.height}
                className={this.props.className}
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 58.21 58.21" 
            >
                <g pointerEvents="bounding-box">
                    <path fill={this.state.color} d="M48.077,25.553c0.021-0.304,0.03-0.604,0.03-0.897c0-8.459-6.882-15.341-15.34-15.341
                        c-6.084,0-11.598,3.611-14.032,9.174c-0.029,0.042-0.123,0.106-0.161,0.117c-3.776,0.395-7.116,2.797-8.713,6.266
                        c-0.046,0.088-0.227,0.236-0.316,0.263C3.925,26.369,0,31.231,0,36.96c0,6.692,5.341,11.935,12.159,11.935h34.448
                        c6.397,0,11.603-5.307,11.603-11.83C58.21,31.164,53.783,26.278,48.077,25.553z M46.607,45.894H12.159
                        C7.023,45.894,3,41.97,3,36.959c0-4.308,2.956-7.966,7.187-8.895c1.001-0.219,1.964-0.996,2.397-1.935
                        c1.158-2.515,3.573-4.255,6.302-4.54c1.089-0.113,2.151-0.883,2.585-1.873c1.97-4.497,6.403-7.402,11.297-7.402
                        c6.805,0,12.34,5.536,12.34,12.341c0,0.378-0.021,0.773-0.064,1.176c-0.102,0.951-0.169,1.579,0.334,2.137
                        c0.284,0.316,0.699,0.501,1.124,0.501c0.028-0.014,0.108-0.004,0.162-0.01c4.718,0.031,8.547,3.878,8.547,8.603
                        C55.21,41.85,51.27,45.894,46.607,45.894z"/>
                </g>
            </svg>
        )
    }
}

export default CloudSVG;