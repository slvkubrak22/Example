import { v4 as uuid } from "uuid";

const defaultRouteSheets = {
  'car1': {
      '2022-12-21': [
          {
              id: uuid(),
              path: [
                  {
                      address: 'ГП Балекс',
                      time: new Date('2022-12-10T14:50')
                  },
                  {
                      address: 'вулиця Ковальська, 2',
                      time: new Date('2022-12-10T15:00')
                  },
                  {
                      address: 'РЦ Балашовка',
                      time: new Date('2022-12-10T15:10')
                  }
              ]
          },
          {
              id: uuid(),
              path: [
                  {
                      address: 'ГП Балекс',
                      time: new Date('2022-12-10T14:50')
                  },
                  {
                      address: 'Автострадна набережна 21 А',
                      time: new Date('2022-12-10T15:00')
                  },
                  {
                      address: 'РЦ Балашовка',
                      time: new Date('2022-12-10T15:10')
                  }
              ]
          }
      ],
      '2022-12-22': [
          {
              id: uuid(),
              path: [
                  {
                      address: 'ГП Балекс',
                      time: new Date('2022-12-10T14:50')
                  },
                  {
                      address: 'Балакирева 45',
                      time: new Date('2022-12-10T15:00')
                  },
                  {
                      address: 'РЦ Балашовка',
                      time: new Date('2022-12-10T15:10')
                  }
              ]
          }
      ],
      '2022-12-22': [
          {
              id: uuid(),
              path: [
                  {
                      address: 'ГП Балекс',
                      time: new Date('2022-12-10T14:50')
                  },
                  {
                      address: 'Балакирева 45',
                      time: new Date('2022-12-10T15:00')
                  },
                  {
                      address: 'РЦ Балашовка',
                      time: new Date('2022-12-10T15:10')
                  }
              ]
          }
      ],
  }
};

const loadRouteSheets = () => {
    const routeSheetsFromLocalStorage = localStorage.getItem('routeSheets');
    if (routeSheetsFromLocalStorage) {
        return JSON.parse(routeSheetsFromLocalStorage);
    }
    return defaultRouteSheets;
}

const routeSheets = loadRouteSheets();

const saveRouteSheets = () => {
    localStorage.setItem('routeSheets', JSON.stringify(routeSheets));
}

export const API = {
    getRouteSheets: () => {
        // sleep(1000);
        return routeSheets;
    },

    // + - add a point and move all the rest
    addPoint: (car, date, id, index, address, time) => {

    },

    // x - delete a point and move all points after it to the left, change time of the points
    removePoint: (car, date, id, index) => {

    }

    // TODO return as soon as it will be needed
    // getCurrentTime: () => currentTime,
    // setCurrentTime: time => {currentTime = time;}
}