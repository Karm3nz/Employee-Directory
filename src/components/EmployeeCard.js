import React from "react";

 function EmployeeCard({ name, lastName, image, email, phone, state}) { 
    return (
        <div className="employeeCard shadow-sm d-flex justify-content-around mb-2">
            <img
                style={{ maxWidth: "60px"}}
                className="col rounded"
                src={image}
                alt="employee"
            />
            <p className="col ms-5">{name} {lastName}</p>
            {/* <p className="col">{lastName}</p> */}
            <p className="col">{email}</p>
            <p className="col">{phone}</p>
            <p className="col">{state}</p>
        </div>
    )
}

export default EmployeeCard;