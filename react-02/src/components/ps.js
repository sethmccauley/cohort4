import React from 'react';

class PsSVG extends React.Component {
    constructor() {
        super();
    }

    clickChange = () => {
        this.props.navChange("ph1");
    }

    render() {
        let colorFill = this.props.active === "ph1" ? "#4078c0" : "#FFF"
        return (
            <svg
                onClick={this.clickChange} 
                width={this.props.width} 
                height={this.props.height}
                className={this.props.className}
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 1024 1024" 
            >
                <title>{this.props.title}</title>
                <g pointerEvents="bounding-box">
                    <circle fill={colorFill} cx="377.47" cy="604.712" r="57.955"/>
                    <circle fill={colorFill} cx="646.53" cy="604.712" r="57.955"/>
                    <circle fill={colorFill} cx="808.53" cy="391.712" r="20.921"/>
                    <circle fill={colorFill} cx="808.53" cy="485.712" r="20.921"/>
                    <circle fill={colorFill} cx="855.53" cy="438.712" r="20.921"/>
                    <circle fill={colorFill} cx="761.53" cy="438.712" r="20.921"/>
                    <path fill={colorFill} d="M982.925,734.88l-11.468-307.351c-0.063-1.702-0.396-3.327-0.946-4.845c-4.428-40.66-24.113-76.8-53.196-102.567   c-3.642-12.797-7.841-28.524-8.606-34.636C904.463,251.564,879.869,228,848.901,228h-84.29c-30.182,0-54.184,22.792-59.725,56.903   c-0.677,4.169-3.428,13.254-6.617,23.097h-378.14c-2.518-9.391-4.72-18.259-5.253-22.519C310.63,251.564,286.036,228,255.068,228   h-84.29c-30.182,0-54.184,22.792-59.725,56.903c-1.179,7.26-8.645,29.741-13.771,44.3c-23.898,24.882-39.862,57.402-43.794,93.516   c-0.55,1.517-0.882,3.125-0.945,4.826L41.075,734.888c-0.007,0.199-0.011,0.394-0.011,0.593c0,60.989,33.267,101.024,91.27,109.843   c5.314,0.808,10.577,1.21,15.792,1.21c34.455,0,66.698-17.613,96.038-52.521c25.388-30.206,44.784-68.675,59.257-98.185   c20.221,16.465,46,26.351,74.048,26.351c59.244,0,108.376-44.089,116.331-101.179h36.398   c7.955,57.089,57.087,101.179,116.331,101.179c28.048,0,53.827-9.887,74.048-26.352c14.473,29.51,33.87,67.978,59.257,98.185   c29.342,34.91,61.58,52.521,96.038,52.521c5.213,0,10.48-0.403,15.793-1.211c58.002-8.818,91.269-48.855,91.269-109.845   C982.936,735.277,982.932,735.079,982.925,734.88z M764.611,260h84.29c16.822,0,26.212,14.732,28.056,29.456   c0.18,1.436,0.464,3.178,0.822,5.038C857.456,285.162,834.864,280,811.076,280c-0.002,0,0.001,0-0.002,0   c-27.256,0-53.471,6.652-76.742,19.367c0.979-3.645,1.739-6.805,2.141-9.277C740.089,267.83,753.891,260,764.611,260z    M657.909,487.789c-3.764-0.361-7.559-0.543-11.379-0.543c-59.443,0-108.709,44.386-116.412,101.754h-36.236   c-7.703-57.368-56.969-101.754-116.412-101.754c-3.82,0-7.615,0.182-11.379,0.543c4.764-15.353,7.224-31.427,7.224-47.623   c0-37.864-13.197-72.699-35.222-100.166h347.705c-22.749,28.341-35.112,63.301-35.112,100.166   C650.686,456.362,653.146,472.437,657.909,487.789z M170.778,260h84.29c16.822,0,26.212,14.732,28.056,29.456   c0.251,2.009,0.699,4.436,1.28,7.221c-21.535-10.767-45.81-16.87-71.48-16.87c-25.787,0-50.166,6.11-71.774,16.969   c0.663-2.621,1.183-4.844,1.49-6.734C146.256,267.782,160.058,260,170.778,260z M219.667,773.423   c-26.482,31.508-53.486,44.676-82.523,40.262c-20.704-3.147-36.656-11.257-47.413-24.103   c-11.012-13.149-16.618-31.254-16.666-53.814l7.646-204.909c28.943,42.062,77.408,69.698,132.213,69.698   c16.197,0,32.271-2.46,47.622-7.224c-0.36,3.764-0.542,7.559-0.542,11.379c0,24.356,7.452,47.003,20.194,65.784   c-1.01,2.056-2.039,4.157-3.096,6.316C262.344,706.969,243.977,744.5,219.667,773.423z M377.47,690.179   c-47.126,0-85.466-38.34-85.466-85.467c0-11.262,2.158-22.208,6.413-32.535c2.598-6.302,0.916-13.559-4.188-18.076   c-2.997-2.653-6.786-4.02-10.608-4.02c-2.687,0-5.391,0.676-7.843,2.057c-19.088,10.741-40.822,16.419-62.854,16.419   c-70.795,0-128.392-57.596-128.392-128.391s57.597-128.391,128.392-128.391s128.391,57.596,128.391,128.391   c0,22.03-5.678,43.766-16.42,62.854c-3.343,5.941-2.555,13.348,1.964,18.451c4.519,5.105,11.774,6.784,18.076,4.188   c10.329-4.256,21.275-6.414,32.535-6.414c47.126,0,85.466,38.34,85.466,85.466C462.936,651.839,424.596,690.179,377.47,690.179z    M646.53,690.179c-47.126,0-85.466-38.34-85.466-85.467c0-47.126,38.34-85.466,85.466-85.466c11.26,0,22.206,2.158,32.535,6.414   c6.3,2.598,13.557,0.916,18.076-4.188c4.519-5.104,5.307-12.51,1.964-18.451c-10.742-19.089-16.42-40.824-16.42-62.854   c0-34.295,13.355-66.536,37.605-90.786c24.249-24.25,56.491-37.604,90.785-37.604c29.427,0,56.567,9.958,78.245,26.672   c0.029,0.097,0.06,0.202,0.082,0.276l0.199-0.06c30.314,23.506,49.865,60.262,49.865,101.503   c0,70.795-57.597,128.391-128.392,128.391c-22.031,0-43.766-5.678-62.854-16.419c-5.942-3.345-13.349-2.555-18.451,1.963   c-5.104,4.518-6.786,11.774-4.188,18.076c4.255,10.327,6.413,21.273,6.413,32.535C731.996,651.839,693.656,690.179,646.53,690.179z    M934.27,789.582c-10.757,12.846-26.709,20.955-47.412,24.103c-29.062,4.409-56.042-8.755-82.524-40.262   c-24.31-28.923-42.677-66.454-57.436-96.611c-1.057-2.159-2.086-4.26-3.096-6.316c12.742-18.781,20.194-41.428,20.194-65.784   c0-3.82-0.182-7.615-0.542-11.379c15.352,4.764,31.425,7.224,47.622,7.224c54.805,0,103.27-27.636,132.213-69.698l7.646,204.909   C950.888,758.328,945.281,776.433,934.27,789.582z"/>
                    <path fill={colorFill} d="M609.471,425.783l-26.853-11.949c-7.363-3.283-16.618,0.821-16.618,7.386v23.898c0,6.565,9.255,10.669,16.618,7.386   l26.828-11.949C616.809,437.272,616.834,429.066,609.471,425.783z"/>
                    <path fill={colorFill} d="M463,428.355c0-5.719-4.636-10.355-10.355-10.355h-33.289c-5.719,0-10.355,4.636-10.355,10.355v9.29   c0,5.719,4.636,10.355,10.355,10.355h33.289c5.719,0,10.355-4.636,10.355-10.355V428.355z"/>
                    <circle fill={colorFill} cx="512.167" cy="501.167" r="24.457"/>
                    <path fill={colorFill} d="M759.356,487c1.616,0,2.644,1.524,2.644,3.14v26.641c0,9.977,8.403,18.22,18.38,18.22h60.14   c9.48,0,17.48-7.839,17.48-17.32v-27.54c0-1.615,1.027-3.14,2.644-3.14h27.285c10.169,0,18.071-8.062,18.071-18.231v-60.437   c0-9.673-7.499-17.332-17.172-17.332h-28.185c-1.616,0-2.644-1.524-2.644-3.14v-26.938c0-9.813-8.271-17.923-18.084-17.923H779.48   C770,343,762,350.839,762,360.32v27.54c0,1.615-1.027,3.14-2.644,3.14h-27.285C721.902,391,714,399.062,714,409.231v60.14   c0,9.836,7.632,17.629,17.468,17.629H759.356z M728,469.371v-60.14c0-2.407,1.664-4.231,4.071-4.231h27.285   c9.336,0,16.644-7.805,16.644-17.14v-27.54c0-1.762,1.72-3.32,3.48-3.32h60.436c2.059,0,4.084,1.864,4.084,3.923v26.938   c0,9.335,7.308,17.14,16.644,17.14h28.185c1.953,0,3.172,1.379,3.172,3.332v60.437c0,2.407-1.664,4.231-4.071,4.231h-27.285   c-9.336,0-16.644,7.805-16.644,17.14v27.54c0,1.762-1.72,3.32-3.48,3.32h-60.14c-2.219,0-4.38-2.001-4.38-4.22V490.14   c0-9.335-7.308-17.14-16.644-17.14h-27.889C729.388,473,728,471.452,728,469.371z"/>
                    <path fill={colorFill} d="M291.828,391h-28.185c-1.616,0-2.644-1.524-2.644-3.14v-26.938c0-9.813-8.271-17.923-18.084-17.923H182.48   C173,343,165,350.839,165,360.32v27.54c0,1.615-1.027,3.14-2.644,3.14h-27.285C124.902,391,117,399.062,117,409.231v60.14   c0,9.836,7.632,17.629,17.468,17.629h27.889c1.616,0,2.644,1.524,2.644,3.14v26.641c0,9.977,8.403,18.22,18.38,18.22h60.14   c9.48,0,17.48-7.839,17.48-17.32v-27.54c0-1.615,1.027-3.14,2.644-3.14h27.285c10.169,0,18.071-8.062,18.071-18.231v-60.437   C309,398.659,301.501,391,291.828,391z M295,468.769c0,2.407-1.664,4.231-4.071,4.231h-27.285c-9.336,0-16.644,7.805-16.644,17.14   v27.54c0,1.762-1.72,3.32-3.48,3.32h-60.14c-2.219,0-4.38-2.001-4.38-4.22V490.14c0-9.335-7.308-17.14-16.644-17.14h-27.889   c-2.08,0-3.468-1.548-3.468-3.629v-60.14c0-2.407,1.664-4.231,4.071-4.231h27.285c9.336,0,16.644-7.805,16.644-17.14v-27.54   c0-1.762,1.72-3.32,3.48-3.32h60.436c2.059,0,4.084,1.864,4.084,3.923v26.938c0,9.335,7.308,17.14,16.644,17.14h28.185   c1.953,0,3.172,1.379,3.172,3.332V468.769z"/>
                    <path fill={colorFill} d="M219.924,454.149c-3.863-4.281-9.957-4.285-13.825-0.01l-11.011,12.173c-1.973,2.181-3.089,5.199-3.089,8.355v20.685   c0,6.384,4.476,11.647,9.997,11.647h22.007c5.521,0,9.996-5.263,9.996-11.647V474.68c0-3.151-1.112-6.166-3.08-8.346   L219.924,454.149z"/>
                    <path fill={colorFill} d="M206.076,422.912c3.864,4.281,9.957,4.285,13.825,0.009l11.01-12.173c1.973-2.181,3.089-5.199,3.089-8.355v-20.685   c0-6.384-4.476-11.709-9.996-11.709h-22.007c-5.521,0-9.997,5.325-9.997,11.709v20.672c0,3.151,1.113,6.166,3.08,8.346   L206.076,422.912z"/>
                    <path fill={colorFill} d="M197.391,431.63l-12.173-10.776c-2.181-1.973-5.199-2.854-8.355-2.854h-20.685c-6.384,0-11.178,4.006-11.178,9.527v22.007   c0,5.521,4.794,10.466,11.178,10.466h20.672c3.151,0,6.166-1.347,8.346-3.315l12.186-11.113   C201.663,441.709,201.667,435.497,197.391,431.63z"/>
                    <path fill={colorFill} d="M269.822,418H249.15c-3.151,0-6.166,0.878-8.346,2.845l-12.185,10.879c-4.281,3.864-4.285,9.898-0.009,13.766   l12.173,11.216c2.181,1.973,5.199,3.294,8.355,3.294h20.685c6.384,0,11.178-4.945,11.178-10.466v-22.007   C281,422.006,276.206,418,269.822,418z"/>
                </g>
            </svg>
        )
    }
}

export default PsSVG;