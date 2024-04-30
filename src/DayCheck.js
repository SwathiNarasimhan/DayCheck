import React, { useState } from "react";

export const DayCheckFunc = () => {

    const [value, setValue] = useState("");

    const HandleValue = (e) => {
        // if(e.target.value <= 5){
        //     window.alert("Enter the number between 1 to 5");
        // }else{
            
        // }
        setValue(e.target.value);
        console.log(value);
    }

    const DayData = () => {
        switch(value){
            case "1":
                return "Mon - Start of the week";
            case "2":
                return "Tue  - Second day of the week";
            case "3":
                return "Wed - Mid day of the week";
            case "4":
                return "Thr - Nearing Weekend";
            case "5":
                return "Fri - Last day of the week";
            default:
                return "None of the Day";
        }
    }


    return(
        <div className="dayWarp">
            <h3>Enter the number between 1 to 5 to get Day Statement</h3>
            <input value={value} onChange={HandleValue} min="0" max="5" type="number" placeholder="Enter the number between 1 to 5"/>
            <p>{DayData(value)}</p>
        </div>
    )
}