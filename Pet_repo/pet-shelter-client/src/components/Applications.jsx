import React, {useEffect, useState} from "react";
import axios from "axios";

const formatDate = (dateString) => dateString.split('T')[0];


const Applications = () => {
  const API_GATEWAY_BASE_URL = import.meta.env.VITE_API_GATEWAY_URL;
  const [applications, setApplications] = useState([]);
//   get applications from api
    // useEffect(() => {
    //     // use axios to get applications
    //     axios.get(`${API_GATEWAY_BASE_URL}/applications`)
    //         .then((response) => {
    //             console.log(response.data.applications);
    //             setApplications(response.data.applications);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);



  return <div className="table-container">
    <h3>Applications</h3>
    {/* table that loops through all the applications. Each application has properties: appliant_name, email, phone, pet_id, pet_name, species, submitted_at */}
    <table>
        <thead>
            <tr>
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Phone #</th>
                <th>Pet ID</th>
                <th>Pet Name</th>
                <th>Pet Species</th>
                <th>Application Submitted on</th>
            </tr>
        </thead>
        <tbody>
            {/* if applications is empty list, show one row that says "No applications to show" */}
            {applications.length === 0 && (
                <tr>
                    <td colSpan="7">No applications to show</td>
                </tr>
            )}
            {applications.map((application) => (
                <tr key={application.id}>
                    <td>{application.applicant_name}</td>
                    <td>{application.email}</td>
                    <td>{application.phone}</td>
                    <td>{application.pet_id}</td>
                    <td>{application.pet_name}</td>
                    <td>{application.species}</td>
                    <td>{formatDate(application.submitted_at)}</td>
                </tr>
            ))}
        </tbody>
    </table>
  </div>;
};

export default Applications;
