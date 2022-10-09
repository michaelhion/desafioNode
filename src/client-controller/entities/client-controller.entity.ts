import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client_controller")
export class ClientController {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

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
    
}
