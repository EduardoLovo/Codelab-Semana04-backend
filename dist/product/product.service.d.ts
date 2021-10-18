import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateProductDto): Prisma.Prisma__ProductClient<import(".prisma/client").Product & {}>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {})[]>;
    findOne(id: number): Prisma.Prisma__ProductClient<import(".prisma/client").Product & {}>;
    update(id: number, dto: UpdateProductDto): Prisma.Prisma__ProductClient<import(".prisma/client").Product & {}>;
    remove(id: number): Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
