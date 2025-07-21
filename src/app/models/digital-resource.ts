export interface DigitalResource {
    id: number;
    title: string;
    author: string;
    year: number;
    type: 'book' | 'video' | 'audio' | 'image';
}
