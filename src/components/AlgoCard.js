import React from "react"

export const AlgoCard = ({ date, preview_text, slug, title}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{date}</h5>
      <p>{preview_text}</p>
      <a href={slug}>Link</a>
    </div>
  );
};