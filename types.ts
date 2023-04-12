type User = {
    name: string,
    email: string,
    bio: string,
    profileImage: string,
    birthdate: Date
}

type UseStore = {
    user: User
    email: string
}


export { UseStore }