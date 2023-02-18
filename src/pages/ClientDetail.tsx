import React from "react";
import { useParams } from "react-router-dom";

const data = [
  {
    date: "2022-02-20",
    updates: [
      {content: "Created new react site"},
      {content: "Updated react site"},
      {content: "Deleted react site"}
    ]
  },
  {
    date: "2022-02-24",
    updates: [
      {content: "Created new rails site"},
      {content: "Updated rails site"},
      {content: "Deleted rails site"}
    ]
  }
];

const ClientDetail = () => {
  const {id}: {id: string} = useParams();

  const updateRenderer = data.map((dateOfWorkPerformed: any) => (<div key={dateOfWorkPerformed.date}>
    {dateOfWorkPerformed.date}
    <div>
      {dateOfWorkPerformed.updates.map((update: {content: string}) => (
        <div key={update.content}>{update.content}</div>
      ))}
    </div>
  </div>))
    
  return (
    <div>
      {updateRenderer}
    </div>
  );
}

export default ClientDetail;