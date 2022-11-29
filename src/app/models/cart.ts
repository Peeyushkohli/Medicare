import { Product } from "./product";

export class Cart{
    items :Product[]=[];

    get totalPrice(): number {
        let totalPrice=0;
        this.items.forEach(item=> {
            totalPrice += item.price;
        });
        return totalPrice;

    }

}