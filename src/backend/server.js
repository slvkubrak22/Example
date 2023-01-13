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
  }
};