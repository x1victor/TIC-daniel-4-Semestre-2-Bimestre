import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('promocoes')
class Promocoes {
    @PrimaryGeneratedColumn('uuid')
    idPromocao: number;
    @Column()
    name: string;
    @CreateDateColumn()
    dtInicio: Date;
    @UpdateDateColumn()
    dtFim: Date;
    @Column('decimal')
    valor:Number;
}

export default Promocoes;