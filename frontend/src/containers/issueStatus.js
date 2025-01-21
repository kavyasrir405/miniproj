import React, { useState } from 'react';
import axios from 'axios';

export default function IssueStatus({ issueName ,pid,onissueTypeChange}) {
  const [selectedStatus, setSelectedStatus] = useState(issueName.status);

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    onissueTypeChange(true)
   
    try {
<<<<<<< HEAD
      await axios.post(`http://${process.env.REACT_APP_API_URL}:8000/djapp/update_issueStatus/`, { issue:issueName.IssueName ,status: newStatus,projectId:pid});    } catch (error) {
=======
      await axios.post(`${process.env.REACT_APP_API_URL}/djapp/update_issueStatus/`, { issue:issueName.IssueName ,status: newStatus,projectId:pid});    } catch (error) {
>>>>>>> ad03ae91a50f1b4545713d0b60455c231197d1f1
      console.error('Error updating issue status:', error);
    }
  };

  return (
    <div>
      <select id="status" value={selectedStatus} onChange={handleStatusChange} style={{
          width: '100px',
                
          padding: '5px',        
          marginRight: '10px'    
        }}>
        <option value="To-Do">To Do</option>
        <option value="In-Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}


