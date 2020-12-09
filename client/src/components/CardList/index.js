import React, {useState} from "react";
import Card from "../../components/Card";
import TipsItems from "./TipsItems.json";


function CardList() {

  const [ Items ] = useState(TipsItems);

  return (
    Items.map(item => (
    <Card key={item.id}
          body={item.body}
          picture={item.picture}
          title={item.title}
          link={item.link} 
    />
      )
    )
  )
};

export default CardList;
