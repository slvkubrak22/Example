import './RouteList.css';

const RouteList = () => {
  return (
    <div className='flex'>
      <div className='map'>
        <p>Тут будет карта с маршрутами</p>
      </div>
      <div>
        <div>
          <p>Выбор даты и автомобиля</p>
        </div>
        <div>
          <p>Список и таблица с маршрутами</p>
        </div>
      </div>
    </div>
  ) /*<h1 className="route__list">Маршрутный лист</h1>*/;
};

export default RouteList;