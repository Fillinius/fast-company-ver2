import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  completedMeetings,
  profession,
  qualities,
  rate,
  bookmark,
  onDelete,
  onBookmark,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{qualities.map(qualiti => (<Qualitie key={qualiti._id} {...qualiti}></Qualitie>))}</td>
      <td key={profession._id}>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>{<Bookmark
        key={1}
        status={bookmark}
        onClick={() => onBookmark(_id)}>
      </Bookmark>}</td>
      <td>
        <button
          onClick={() => onDelete(_id)}
          className="btn btn-danger">delete
        </button>
      </td>
    </tr>)
}

export default User