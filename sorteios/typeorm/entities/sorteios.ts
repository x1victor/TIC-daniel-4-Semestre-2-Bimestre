import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('sorteios')
class Sorteios{
    @PrimaryGeneratedColumn("uuid")
    idSorteios: string
    @Column()
    nomeSorteios: string
    @Column('int')
    qtdSorteios: number
    @CreateDateColumn()
    created_at: Date
}

export default Sorteios