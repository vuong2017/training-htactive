import { NotificationManager } from 'react-notifications';

const waitingTime = 7000
//---NOTIFICATION SUCCESS MESSAGE---
const notificationsSuccess = (messages, callback = () => {}) => {
  if (Array.isArray(messages)) {
    messages.map(message => NotificationManager.success('Success', message, waitingTime, callback))
  } else {
    NotificationManager.success('Success', messages, waitingTime, callback)
  }
}

//---NOTIFICATION WARNING MESSAGE---
const notificationsWarning = (messages, callback = () => {}) => {
  if (Array.isArray(messages)) {
    messages.map(message => NotificationManager.warning('Warning', message, waitingTime, callback))
  } else {
    NotificationManager.warning('Warning', messages, waitingTime, callback)
  }
}

//---NOTIFICATION ERROR MESSAGE---
const notificationsError = (messages, callback = () => {}) => {
  if (Array.isArray(messages)) {
    messages.map(message => NotificationManager.error('Error', message, waitingTime, callback))
  } else {
    NotificationManager.error('Error', messages, waitingTime, callback)
  }
}

export {
  notificationsSuccess,
  notificationsWarning,
  notificationsError
}