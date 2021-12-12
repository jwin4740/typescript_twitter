import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";


@Entity()
export class Tweet {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'text'
    })
    main_text!: string;

    @Column({
        type: 'text', 
        nullable: true
    })
    hashtags!: string;

    @Column({
        type: 'boolean', 
        nullable: false,
        default: false
    })
    used!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}