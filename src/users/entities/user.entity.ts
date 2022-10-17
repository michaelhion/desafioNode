import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    username: string;

    @Column()
    name:string;

    @Column()
    birthDay:Date;

    @Column()
    password:string;

    @Column()
    spouse:string;

    @Column()
    son_name:string;

    @Column()
    address:string;

    @Column()
    phone_number:string;

    @Column()
    zip_code:string;

    @Column()
    city_name: string;

    @Column()
    state_name:string;

    
}
