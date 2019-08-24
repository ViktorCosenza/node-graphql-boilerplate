import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne} from "typeorm";
import {Product} from './Product'
import {User} from './User'

import {prop} from '../utils/functional'

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(user => User, prop('sales'))
    user: User;

    @ManyToOne(product => Product, prop('sales'))
    product: Product;

}