import { prependOnceListener } from "process";
import React from "react";
import { IState as IProps} from "../App"

const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                <div className="List-header">
                    <h2>{person.fname}</h2>
                </div>
                <div className="List-header">
                    <h2>{person.lname}</h2>
                </div>
                <p>{person.age}</p>
            </li>
            )
        })
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List