import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Category[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
    update(id: number, data: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
    remove(id: number): void;
}
