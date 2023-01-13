import './Calendar.css';

function Calendar() {
  return (
    <section className="date">
      <label for="date">Выбрать дату:</label>
      <input type="date" id="date" min="2022-01-01" max="2030-12-31"></input>
    </section>
  )
}

export default Calendar;