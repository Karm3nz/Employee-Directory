import React from "react";

 function EmployeeCard({ name, image, dept, email, phone}) { 
    return (
        <div className="employeeCard shadow-sm d-flex justify-content-around mb-2">
            <img
                style={{ maxWidth: "60px"}}
                className="col rounded"
                src={image}
                alt="employee"
            />
            <p className="col ms-5">{name}</p>
            <p className="col">{dept}</p>
            <p className="col">{email}</p>
            <p className="col">{phone}</p>
        </div>
    )
}

export default EmployeeCard;