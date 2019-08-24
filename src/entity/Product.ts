import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, OneToMany} from "typeorm";
import {ProductType} from './ProductType'
import { Sale } from "./Sale";

import {prop} from '../utils/functional'

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @ManyToOne(type => ProductType, prop('products'))
    type: ProductType;

    @OneToMany(sale => Sale, prop('product'))
    sales: Sale[];

}