import { UpdateImageDto } from 'src/image/dto/update-image.dto';
import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    images?: UpdateImageDto[];
}
export {};
