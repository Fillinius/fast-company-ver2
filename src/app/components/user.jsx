import React from "react";


const User = ({
  _id,
  name,
  completedMeetings,
  profession,
  qualities,
  rate,
  bookmark,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{qualities.map(qualiti => (<span key={qualiti._id} className={`badge bg-${qualiti.color}`}>{qualiti.name}</span>))}</td>
      <td key={profession._id}>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>{bookmark}</td>
      <td>
        <button
          onClick={() => onDelete(_id)}
          className="btn btn-danger">delete
        </button>
      </td>
    </tr>)
}

export default User