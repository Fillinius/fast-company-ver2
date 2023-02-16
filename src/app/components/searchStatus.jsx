import React from "react";

const SearchStatus = ({ users }) => {
  //Изменеиние вида текста в зависимости от длины массива
  const handlePhrase = (number) => {
    number += users.length >= 2 && users.length <= 4
      ? (` человека тусанут с тобой сегодня`)
      : (` человек тусанет с тобой сегодня`)
    return number
  }
  // Динамический рендер классов
  const getBadgeClasses = () => {
    let colorClass = "badge "
    colorClass += users.length === 0 ? "bg-warning text-dark" : "bg-primary"
    return colorClass
  }

  return (
    users.length > 0
      ? <h1><span className={getBadgeClasses()}>{handlePhrase(users.length)}</span></h1>
      : <h1><span className={getBadgeClasses()}>Никто с тобой не тусанет</span></h1>
  )
}

export default SearchStatus