export const buttonsHome = [
  {
    name: 'Power TV',
    isWorks: false,
    controlId: 1,
    action(dev) {
      return { ...dev, isPower: !dev.isPower }
    },
  },
  { name: 'Vol+', count: 10, controlId: 1 },
  { name: 'Vol-', count: 10, controlId: 1 },
  { name: 'Back', isWorks: false },
  {
    name: 'Power Light',
    isWorks: false,
    controlId: 4,
    action(dev) {
      return { ...dev, isPower: !dev.isPower }
    },
  },
  {
    name: 'Power Kettle',
    isWorks: false,
    controlId: 5,
    action(dev) {
      return { ...dev, isPower: !dev.isPower }
    },
  },
]

export const buttonsGarage = [
  {
    name: 'Power TV',
    isWorks: false,
    controlId: 1,
    action(dev) {
      return { ...dev, isPower: !dev.isPower }
    },
  },
  { name: 'Vol+', count: 10, controlId: 1 },
  { name: 'Vol-', count: 10, controlId: 1 },
  { name: 'Back', isWorks: false },
  {
    name: 'Power Gate',
    isWorks: false,
    controlId: 2,
    action(dev) {
      return { ...dev, isPower: !dev.isPower }
    },
  },
  {
    name: 'Power Light',
    isWorks: false,
    controlId: 4,
    action(dev) {
      return { ...dev, isPower: !dev.isPower }
    },
  },
  {
    name: 'Power Washer',
    isWorks: false,
    controlId: 3,
    action(dev) {
      return { ...dev, isPower: !dev.isPower }
    },
  },
]
