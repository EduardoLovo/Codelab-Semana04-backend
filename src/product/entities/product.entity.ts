import { Category } from "src/category/entities/category.entity.js";
import { Image } from "../../image/entities/image.entity.js";

export class Product {
    id?: number;
    name: string;
    price?: number;
    images?: Image[];
    categories: Category[];
}


