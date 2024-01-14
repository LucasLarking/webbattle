export interface Image {
    image: string;
    width: number;
    height: number;
}

export interface Lesson_small
 {
    id: number;
    name: string;
}

export interface Lesson_big {
    id: number;
    name: string;
    image_set: Image[];
}

export const CAHCE_KEY_LESSON = ['Lesson']