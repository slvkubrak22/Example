import { useState } from "react";
import { API } from "../../../../../../backend/server";


function Card() {
  const [routeSheets, setRouteSheets] = useState(API.getRouteSheets());

  return(
    <div>address 1 time 1</div>
  )
}

export default Card;