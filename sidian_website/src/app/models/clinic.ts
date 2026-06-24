export interface Service{
    id: number,
    title: string,
    description: string,

}

export interface Tip {
    id: number,
    title: string,
    description: string,
}

export interface Doctor {
    id: number,
    name: string,
    speciality : string,
    image: string,
    contact: string
}

export interface Testimonial {
    id: number, 
    title: string,
    description: string,
    image1: string,
    image2: string;
}

export interface LabService {
    name: string,
    description: string,
    image: string,
    category: 'blood' | 'urine' | 'stool';
}
export interface Stat{
    value: string,
    label: string,
}
