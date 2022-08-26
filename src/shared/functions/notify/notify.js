
import toast from 'react-hot-toast'

export const notify = (message, type) => {
    type === 'success' ? toast.success(message, {
        duration: 3500}) : toast.error(message, {
            duration: 3500})
}