import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
class Clientes{
    @PrimaryGeneratedColumn('uuid')
    cpf: string
    @Column()
    senha: string
    @Column()
    nome: string
    @Column()
    cep: string
    @Column()
    sexo: boolean
    @Column()
    email: string
    @Column()
    estado: string
    @Column()
    cidade: string
    @Column()
    telefone: string
    @Column()
    emprego: string
    @CreateDateColumn()
    data_nascimento: Date
    @Column()
    endereco: string
}

export default Clientes