export class ItemData {
    title: string;
    description: string;
    price: string;
    image: string;
    email: string;
    favorite: boolean;

    constructor(data: any) {
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.image = data.image;
        this.email = data.email;
        this.favorite = false;
    }
}