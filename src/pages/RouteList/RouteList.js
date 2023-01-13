import './RouteList.css';
import Map from './Components/Map/Map';
import Info from './Components/Info/Info'

const RouteList = () => {
  return (
    <div className='flex'>
      <Map></Map>
      <Info></Info>
    </div>
  )
};

export default RouteList;