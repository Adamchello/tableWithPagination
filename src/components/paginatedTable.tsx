import React, {FC, useState} from 'react';
// Stwórz komponent PaginatedTable o poniższej strukturze, 
// w którym będzie renderowana paginowana tabelka z wygenerowanymi przez Ciebie danymi

interface User {
    _id: string,
    index: number,
    name: string
}

interface dataProps {
    dataEntries: Array<User>
}

const PaginatedTable: FC<dataProps> = ({ dataEntries }) => {

    const [usersData, useUsersData] = useState<Array<User>>(dataEntries);

    const createUserTable = () => {
        return usersData.map(item => (
            <div key={item._id}>
                <p>{item.index}</p>
                <p>{item.name}</p>
            </div>
        ))
    }

    return (
        <div>
            <h1>User Table</h1>
            {createUserTable()}
        </div>
    )
}

export default PaginatedTable;
