import { notification } from 'antd'
export function NotificationCPN({ type, message, description }) {
  return notification[type]({
    message: message,
    description: description,
    duration: 3,
  })
}
