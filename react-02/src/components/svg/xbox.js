import React from 'react';

class XboxSVG extends React.Component {
    clickChange = () => {
        this.props.navChange("cities");
    }

    render() {
        let colorFill = this.props.active === "cities" ? "#4078c0" : "#FFF"

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
                    <path fill={colorFill} d="M966.388,652.366c-3.531-48.4-12.452-102.969-25.798-157.808c-19.6-80.543-54.672-181.922-91.809-216.376   c2.824-6.985,0.574-15.235-5.872-19.717c-0.352-0.245-0.703-0.483-1.06-0.719c-30.24-20.024-67.6-32.09-105.196-33.974   c-37.149-1.856-71.024,6.204-95.363,22.711c-6.423,4.356-8.783,12.439-6.189,19.401c-0.893,0.569-8.757,4.99-41.674,8.433   c-18.803,1.967-143.275,1.866-161.118,0c-32.922-3.443-40.784-7.865-41.674-8.432c2.595-6.962,0.234-15.046-6.189-19.402   c-24.339-16.508-58.225-24.577-95.363-22.711c-37.597,1.884-74.956,13.949-105.178,33.96c-0.351,0.232-0.701,0.471-1.054,0.715   c-6.456,4.472-8.722,12.722-5.907,19.712c-37.134,34.465-72.201,135.835-91.799,216.375   C71.8,549.375,62.879,603.945,59.348,652.347c-4.057,55.601-0.981,100.837,9.14,134.452c17.347,57.617,52.271,69.712,78.513,69.712   c33.828,0,67.768-39.452,100.589-77.605c15.616-18.152,30.365-35.071,41.216-42.866C318.166,714.944,408.198,701,512.845,701   c0.007,0,0.017,0,0.022,0C617.522,701,708,714.951,737,736.047v-0.114c11,7.796,25.566,24.887,41.182,43.041   c32.821,38.155,66.742,77.581,100.571,77.581c26.243,0,61.158-12.109,78.505-69.726   C967.379,753.213,970.444,707.964,966.388,652.366z M928.522,778.166c-14.56,48.36-41.074,48.36-49.787,48.36   c-5.516,0-15.833-3.393-33.666-19.553c-14.587-13.22-29.847-30.708-44.396-47.62C783.857,739.804,768,721.339,754,711.456v0.226   C712,681.523,602.123,671,512.868,671c-0.011,0-0.012,0-0.023,0c-89.25,0-199.569,10.52-241.544,40.675   c-13.756,9.883-29.639,28.232-46.454,47.779c-14.549,16.911-29.593,34.343-44.18,47.561c-17.833,16.16-28.151,19.524-33.667,19.524   c-8.713,0-35.227-0.014-49.787-48.375c-8.934-29.672-11.681-72.426-7.945-123.627c3.413-46.774,12.067-99.651,25.026-152.907   c28.006-115.085,64.956-190.066,86.982-204.651c26.906-17.816,60.194-28.1,93.734-28.958c31.319-0.79,59.253,6.896,76.652,21.114   c5.796,4.736,17.414,10.707,56.129,14.872c23.643,2.543,53.856,3.943,85.075,3.943s61.433-1.4,85.076-3.943   c38.714-4.165,50.332-10.136,56.129-14.872c17.396-14.216,45.317-21.913,76.649-21.098c33.538,0.864,66.827,11.154,93.737,28.973   c22.026,14.585,58.977,89.562,86.982,204.643c12.959,53.253,21.613,106.124,25.025,152.896   C940.203,705.749,937.456,748.495,928.522,778.166z"/>
                    <circle fill={colorFill} cx="760.518" cy="341.833" r="26.273"/>
                    <circle fill={colorFill} cx="760.518" cy="466.129" r="26.273"/>
                    <circle fill={colorFill} cx="822.164" cy="402.488" r="26.273"/>
                    <circle fill={colorFill} cx="698.873" cy="402.488" r="26.273"/>
                    <circle fill={colorFill} cx="610.873" cy="415.488" r="17.361"/>
                    <circle fill={colorFill} cx="413.873" cy="415.488" r="17.361"/>
                    <circle fill={colorFill} cx="263.847" cy="402.488" r="50.478"/>
                    <path fill={colorFill} d="M347.621,402.488c0-46.192-37.581-83.773-83.774-83.773s-83.774,37.581-83.774,83.773   c0,46.193,37.581,83.774,83.774,83.774S347.621,448.682,347.621,402.488z M263.847,475.263c-40.128,0-72.774-32.646-72.774-72.774   c0-40.127,32.646-72.773,72.774-72.773s72.774,32.646,72.774,72.773C336.621,442.616,303.975,475.263,263.847,475.263z"/>
                    <circle fill={colorFill} cx="639.847" cy="568.488" r="50.478"/>
                    <path fill={colorFill} d="M639.847,484.715c-46.193,0-83.774,37.581-83.774,83.773c0,46.193,37.581,83.774,83.774,83.774   s83.774-37.581,83.774-83.774C723.621,522.296,686.04,484.715,639.847,484.715z M639.847,641.263   c-40.128,0-72.774-32.646-72.774-72.774c0-40.127,32.646-72.773,72.774-72.773s72.774,32.646,72.774,72.773   C712.621,608.616,679.975,641.263,639.847,641.263z"/>
                    <path fill={colorFill} d="M390.847,484.715c-46.193,0-83.774,37.581-83.774,83.773c0,46.193,37.581,83.774,83.774,83.774   s83.774-37.581,83.774-83.774C474.621,522.296,437.04,484.715,390.847,484.715z M390.847,641.263   c-40.128,0-72.774-32.646-72.774-72.774c0-40.127,32.646-72.773,72.774-72.773s72.774,32.646,72.774,72.773   C463.621,608.616,430.975,641.263,390.847,641.263z"/>
                    <path fill={colorFill} d="M390.847,512.799c-30.707,0-55.689,24.982-55.689,55.689c0,30.708,24.982,55.69,55.689,55.69   c30.708,0,55.69-24.982,55.69-55.69C446.537,537.781,421.555,512.799,390.847,512.799z M433.387,549.284   c-8.195,0.364-14.208-1.418-17.914-5.326c-4.962-5.23-5.081-13.416-4.738-17.7C420.748,530.993,428.81,539.185,433.387,549.284z    M371.475,526.024c0.358,4.201,0.325,12.59-4.68,17.9c-3.781,4.014-9.99,5.794-18.475,5.328   C352.979,538.995,361.236,530.713,371.475,526.024z M348.399,587.897c8.421-0.45,14.591,1.322,18.365,5.299   c4.987,5.257,5.082,13.501,4.732,17.767C361.304,606.301,353.074,598.081,348.399,587.897z M382.184,614.36   c0.667-4.746,1.742-18.991-7.383-28.675c-6.561-6.962-16.587-9.823-29.829-8.551c-0.527-2.804-0.816-5.691-0.816-8.646   c0-2.894,0.278-5.722,0.784-8.471c2.045,0.197,4.021,0.307,5.912,0.307c10.363,0,18.396-2.964,23.948-8.856   c9.24-9.806,8.021-24.287,7.358-28.846c2.817-0.532,5.718-0.823,8.687-0.823c3.154,0,6.235,0.318,9.216,0.918   c-0.666,4.668-1.801,19.017,7.373,28.751c5.553,5.894,13.584,8.857,23.948,8.856c1.725,0,3.524-0.092,5.378-0.256   c0.5,2.734,0.775,5.545,0.775,8.42c0,2.938-0.285,5.809-0.807,8.598c-12.975-1.144-22.823,1.731-29.294,8.599   c-9.067,9.622-8.064,23.745-7.396,28.58c-2.973,0.596-6.046,0.914-9.193,0.914C387.886,615.179,384.993,614.89,382.184,614.36z    M410.729,610.722c-0.318-4.317-0.135-12.349,4.713-17.492c3.692-3.919,9.692-5.715,17.868-5.365   C428.718,597.888,420.688,606.015,410.729,610.722z"/>
                    <path fill={colorFill} d="M568.63,410h11.029c-2.674-33.814-29.8-60.836-63.658-63.349v11.029C543.792,360.138,566.014,382.253,568.63,410z"/>
                    <path fill={colorFill} d="M505,357.733v-11.029c-33.536,2.827-60.309,29.713-62.965,63.296h11.029C455.657,382.483,477.531,360.493,505,357.733z"/>
                    <path fill={colorFill} d="M453.065,421h-11.029c2.667,33.572,29.436,60.446,62.963,63.273v-11.029C477.539,470.485,455.669,448.506,453.065,421z"/>
                    <path fill={colorFill} d="M579.657,421h-11.029c-2.625,27.736-24.844,49.84-52.628,52.297v11.029C549.851,481.813,576.972,454.803,579.657,421z"/>
                    <circle fill={colorFill} cx="510.847" cy="415.488" r="48.785"/>
                </g>
            </svg>
        )
    }
}

export default XboxSVG;