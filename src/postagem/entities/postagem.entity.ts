import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm";

@Entity({name: "tb_postagens"})
export class Postagem{

    @PrimaryGeneratedColumn() //Define Chave Primária e Auto_Inclement
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length: 3000, nullable: false})
    texto: string;
    
    @UpdateDateColumn()
    data: Date;
};