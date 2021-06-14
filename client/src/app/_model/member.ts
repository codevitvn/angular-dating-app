import { Photo } from "./photo";

export interface Member {
    username: string;
    gender: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: string;
    lastActive: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}
