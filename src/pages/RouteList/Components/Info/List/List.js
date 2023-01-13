import Card from './Card/Card';
import './List.css';

function List() {
  return (
    <div className="list">
      <p>Список и таблица с маршрутами</p>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default List;