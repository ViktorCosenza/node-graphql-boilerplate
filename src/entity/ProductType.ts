import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Product} from './Product'

import {prop} from '../utils/functional'

@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Product, prop('type'))
    products: Product[]; 

}