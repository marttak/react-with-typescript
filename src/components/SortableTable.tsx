import { MouseEventHandler, useCallback, useState } from "react";
import data from "../data.json"

type Data = typeof data

type SortKeys = keyof Data[0]

type SortOrder = 'ascn' | 'desc'

function sortData({
    tableData, 
    sortKey, 
    reverse
}:{
    tableData: Data,
    sortKey: SortKeys,
    reverse: boolean;
}){
    if(!sortKey) return tableData;

    const sortedData = data.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1
    })

    if(reverse){
        return sortedData.reverse()
    }

    return tableData;
}

function SortButton({sortOrder, columnKey, sortKey, onClick}:
{
    sortOrder: SortOrder
    columnKey: SortKeys
    sortKey: SortKeys
    onClick: MouseEventHandler<HTMLButtonElement>
}){
    return <button onClick = {onClick} className={`${sortKey === 
    columnKey && sortOrder === 'desc' ? 'sort-button sort-reverse' : 'sort-button'}`}>△</button>;
}

function SortableTable({ data }:{data: Data}){

    const [sortKey, setSortKey] = useState<SortKeys>('fname')
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn')

    const sortedData = useCallback(
        () => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}), 
        [data, sortKey, sortOrder]
    );

    function changeSort(key: SortKeys){
        setSortOrder (sortOrder == 'ascn' ? 'desc': 'ascn')
        setSortKey(key);
    }

    const headers: {key: SortKeys, label: string}[] = [
        {key: "fname", label: "First name"},
        {key: "lname", label: "Last name"},
        {key: "age", label: "Age"},
    ];

    return(
        <table>
            <thead>
                <tr>
                    {headers.map((row) => {
                        return <td key={row.key}>
                            {row.label} <SortButton 
                            columnKey={row.key}
                            onClick={() => changeSort(row.key)}
                            {...{
                                sortOrder,
                                sortKey
                            }}
                            />
                            </td>;
                    })}
                </tr>
            </thead>

            <tbody>
                {sortedData().map((person) => {
                    return (
                        <tr key={person.fname}>
                            <td>{person.fname}</td>
                            <td>{person.lname}</td>
                            <td>{person.age}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default SortableTable;