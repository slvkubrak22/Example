import './RouteList.css';
import './Map.css';
import './Choice.css';
import './List.css';
import './Date.css';
import Calendar from '../Calendar/Calendar';


const RouteList = () => {
  return (
    <div className='flex'>
      <div className='map'>
        <p>Тут будет карта с маршрутами</p>
      </div>
      <div className='choice'>
        <div>
          <p>Выбор даты и автомобиля</p>
          <div className='flex'>
            <Calendar />
            <div >
              Автомобиль
              <select>
                <option value="value1">машина 1</option>
                <option value="value2">машина 2</option>
                <option value="value3">машина 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className='list'>
          <p>Список и таблица с маршрутами</p>
        </div>
      </div>
    </div>
  )
};

export default RouteList;