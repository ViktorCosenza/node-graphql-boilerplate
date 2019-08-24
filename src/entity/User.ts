import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Sale } from "./Sale";
import {prop} from '../utils/functional'

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(sale => Sale, prop('user'))
    sales: Sale[]

}
