import React from 'react';

class GameboySVG extends React.Component {
    clickChange = () => {
        this.props.navChange("fifolifo");
    }

    render() {
        let colorFill = this.props.active === "fifolifo" ? "#4078c0" : "#FFF"

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
                    <path fill={colorFill} d="M484.895,781.845l-44.061,25.438c-5.041,2.91-6.784,9.416-3.874,14.456c2.91,5.041,9.416,6.784,14.456,3.874l44.061-25.439   c5.041-2.91,6.784-9.416,3.874-14.456S489.936,778.935,484.895,781.845z"/>
                    <path fill={colorFill} d="M587.039,787.88c-2.91-5.041-9.416-6.784-14.456-3.874l-44.061,25.439c-5.041,2.91-6.784,9.416-3.874,14.456   s9.416,6.784,14.456,3.874l44.061-25.438C588.206,799.427,589.949,792.921,587.039,787.88L587.039,787.88z"/>
                    <path fill={colorFill} d="M423.144,649H382v-40.767c0-4.648-3.611-8.233-8.259-8.233h-24.727c-4.648,0-8.014,3.585-8.014,8.233V649h-41.39   c-4.648,0-8.61,3.988-8.61,8.637v24.727c0,4.648,3.962,8.637,8.61,8.637H341v40.767c0,4.648,3.366,8.233,8.014,8.233h24.727   c4.648,0,8.259-3.585,8.259-8.233V691h41.144c4.648,0,8.856-3.988,8.856-8.637v-24.727C432,652.988,427.793,649,423.144,649z"/>
                    <circle fill={colorFill} cx="622.112" cy="690.919" r="32.031"/>
                    <circle fill={colorFill} cx="701.769" cy="649.081" r="32.032"/>
                    <path fill={colorFill} d="M762.212,84H262.149C234.228,84,212,107.063,212,134.985v756.723C212,919.629,234.228,942,262.149,942h431.069   C759.183,942,813,888.679,813,822.715V134.985C813,107.063,790.133,84,762.212,84z M262.149,114h500.062   c11.379,0,20.788,9.605,20.788,20.985V142H242v-7.015C242,123.605,250.77,114,262.149,114z M693.219,912h-40.046   c-0.153,0-0.353-0.731-0.614-1.16l-42.269-69.166c-1.87-3.065-5.871-3.989-8.935-2.118c-3.063,1.87-4.031,5.719-2.161,8.784   L638.142,912H262.149C250.77,912,242,903.087,242,891.708V162h541v636.73l-27.776-45.385c-1.87-3.065-5.908-4.033-8.972-2.161   c-3.063,1.87-4.05,5.87-2.18,8.935l38.774,63.372C782.335,872.477,742.324,912,693.219,912z"/>
                    <path fill={colorFill} d="M639.262,824.078c-1.87-3.064-5.87-4.032-8.935-2.161c-3.063,1.87-4.031,5.87-2.161,8.935l42.269,69.251   c1.225,2.007,3.363,3.114,5.554,3.114c1.154,0,2.323-0.308,3.381-0.953c3.063-1.87,4.031-5.87,2.161-8.935L639.262,824.078z"/>
                    <path fill={colorFill} d="M668.233,806.395c-1.87-3.065-5.87-4.033-8.935-2.161c-3.063,1.87-4.031,5.87-2.161,8.935l42.269,69.252   c1.225,2.007,3.363,3.114,5.554,3.114c1.154,0,2.323-0.308,3.381-0.953c3.063-1.87,4.031-5.87,2.161-8.935L668.233,806.395z"/>
                    <path fill={colorFill} d="M697.205,788.712c-1.87-3.065-5.871-4.032-8.935-2.161c-3.063,1.87-4.031,5.87-2.161,8.935l42.269,69.252   c1.225,2.007,3.363,3.114,5.554,3.114c1.154,0,2.323-0.308,3.381-0.953c3.063-1.87,4.031-5.87,2.161-8.935L697.205,788.712z"/>
                    <path fill={colorFill} d="M768.444,840.28l-42.268-69.251c-1.871-3.065-5.871-4.032-8.935-2.161c-3.063,1.87-4.031,5.87-2.161,8.935l42.268,69.251   c1.225,2.007,3.363,3.114,5.554,3.114c1.154,0,2.323-0.308,3.381-0.953C769.347,847.345,770.314,843.345,768.444,840.28z"/>
                    <path fill={colorFill} d="M671.833,557C716.781,557,753,520.149,753,475.201V226.532C753,209.603,739.494,196,722.565,196H301.812   C284.883,196,271,209.603,271,226.532v299.401C271,542.862,284.883,557,301.812,557H671.833z M361,243.917   c0-6.581,5.335-11.917,11.917-11.917h278.167c6.581,0,11.917,5.335,11.917,11.917v267.167c0,6.581-5.335,11.917-11.917,11.917   H372.917c-6.581,0-11.917-5.335-11.917-11.917V243.917z M298.739,322c0-5.667,4.594-10.261,10.261-10.261   s10.261,4.594,10.261,10.261s-4.594,10.261-10.261,10.261S298.739,327.667,298.739,322z"/>
                </g>
            </svg>
        )
    }
}

export default GameboySVG;