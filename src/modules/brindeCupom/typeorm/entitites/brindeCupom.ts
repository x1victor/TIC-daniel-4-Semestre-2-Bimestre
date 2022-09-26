import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('brindeCupom')
class BrindeCupom{
    @PrimaryGeneratedColumn('uuid')
    idBrindeCupom: string
    @Column()
    nomeBrinde: string
    @Column('int')
    qtdpont: number
}

export default BrindeCupom