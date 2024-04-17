import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tema } from "../entities/tema.entity";
import { DeleteResult, ILike, Repository } from "typeorm";



@Injectable()
export class TemaService{
    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ){}

    async findAll(): Promise<Tema[]>{
        return await this.temaRepository.find();
    }

    async  findById(id: number): Promise<Tema> {
        let tema = await this.temaRepository.findOne({
            where:{
                id
            }
        })
        if (!tema)
            throw new HttpException('Tema não encontrada!', HttpStatus.NOT_FOUND);
        return tema;
    }

    async findByDescricao(descricao: string): Promise<Tema[]>{
        return await this.temaRepository.find({
            where:{
                descricao: ILike(`%${descricao}%`)
            }
        })
    }

    async create(tema: Tema): Promise<Tema>{
        return await this.temaRepository.save(tema);
    }

    async update(tema: Tema): Promise<Tema>{

        let buscaTema: Tema = await this.findById(tema.id)

        if (!buscaTema || !tema.id)
            throw new HttpException('Tema não foi encontrada!', HttpStatus.NOT_FOUND)    
        
        return await this.temaRepository.save(tema);
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscaTema: Tema = await this.findById(id)

        if (!buscaTema)
            throw new HttpException('Tema não foi encontrada!', HttpStatus.NOT_FOUND)
        
        return await this.temaRepository.delete(id);
    }

}