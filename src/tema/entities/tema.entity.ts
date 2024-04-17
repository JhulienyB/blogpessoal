import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm";

@Entity({name: "tb_temas"})
export class Tema{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string;
};