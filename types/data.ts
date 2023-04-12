type CloseUserData = {
    id: string,
    name: string,
    profileImage: string | null,
    birthdate: Date,
    bio: string | null,
}



type CloseUser = {
    song: {
        songName: string;
        songImage: string;
        artist: string;
        link: string;
    };
    user: CloseUserData;
    distance: number;
}

export {
    CloseUser
}