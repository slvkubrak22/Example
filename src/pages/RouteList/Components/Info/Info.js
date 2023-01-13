import './Info.css';

import Calendar from './Calendar/Calendar';
import GetCar from './GetCar/GetCar';
import List from './List/List';


function Info() {
  return (
    <section className="info">
      <div>
        <p>Выбор даты и автомобиля</p>
        <div className="flex">
          <Calendar />
          <GetCar />
        </div>
      </div>
      <List />
    </section>
  );
}

export default Info;