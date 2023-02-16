import React from "react";

const Bookmark = ({ status, ...rest }) => {
  /*
  const handleBook = (status) => {
    status = status == true ? false : true;
    console.log(status);
  }
*/
  return <button {...rest}><i className={"bi bi-bookmark-check" + (status ? "-fill" : "")} ></i></button>
}

export default Bookmark

//<i class="bi bi-bookmark-check-fill"></i>