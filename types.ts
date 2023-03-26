type User = {
    name: String,
    email: String,
    bio: String,
    profileImage: String,
    birthdate: Date
}

type UseStore = {
    user: User
    email: string
}


export { UseStore }