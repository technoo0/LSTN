import { create } from 'zustand'
import { UseStore } from './types'
const useStore = create<UseStore>(set => ({
    user: {
        name: null,
        email: null,
        bio: null,
        profileImage: null,
        birthdate: null
    },
    email: "",
}))


export default useStore