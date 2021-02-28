import React from "react";
import EmployeeCard from "./EmployeeCard";


function EmployeeCardList ({ data }) { 
    return (
        data.map(employee => (
            <EmployeeCard
                key={employee.login.uuid}
                image={employee.picture.medium}
                name={employee.name.first}
                lastName={employee.name.last}
                email={employee.email}
                phone={employee.phone}
                state={employee.location.state}
            />
        ))
    )
}

export default EmployeeCardList;