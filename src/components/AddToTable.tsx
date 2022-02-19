import React, { useState } from "react";
import { idText } from "typescript";
import { IState as Props} from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        fname: "",
        lname: "",
        age: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(
            !input.fname || 
            !input.lname ||
            !input.age
        ){
            return 
        }

        setPeople([
            ...people,
            {
                fname: input.fname,
                lname: input.lname,
                age: parseInt(input.age)
            }
        ]);

        setInput({
            fname: "",
            lname: "",
            age: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="First name"
                className="AddToList-input"
                value={input.fname}
                onChange={handleChange}
                name="fname"
            />
            <input
                type="text"
                placeholder="Last name"
                className="AddToList-input"
                value={input.lname}
                onChange={handleChange}
                name="lname"
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    )
}

export default AddToList