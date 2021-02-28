import React from "react";

 function EmployeeCard({ name, image, dept, email, phone}) { 
    return (
        <div className="employeeCard bg-white shadow d-flex justify-content-around">
            <img
                style={{ maxWidth: "60px"}}
                className="col rounded"
                src={image}
                alt="employee"
            />
            <p className="col">{name}</p>
            <p className="col">{dept}</p>
            <p className="col">{email}</p>
            <p className="col">{phone}</p>
        </div>
    )
}

export default EmployeeCard;