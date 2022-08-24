import React from 'react'

var NUMBER_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
//rangamannar.v@sure-shield.com

const CardItem = ({ item }) => {
    const { id, title, number, icon, color } = item;

       const iconStyle = {
          boxShadow: `0px 3px 3px 0px ${color}`,
          background: `linear-gradient(60deg,${color}, ${color})`,
        }

    function getNumber(number) {
        var tier = Math.log10(Math.abs(number)) / 3 | 0;

        if (tier == 0) return number;
        var suffix = NUMBER_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
        var scaled = number / scale;
        return scaled.toFixed(1) + suffix;
    }

    return (
        <>
            <div className="card">
                <div className="card-title">{title}</div>
                <div className="card-icon" style={iconStyle}>
                    <span className="icons">{icon}</span>
                </div>
                <div className="card-data">{getNumber(number)}</div>
            </div>
        </>
    )
}

export default CardItem;


