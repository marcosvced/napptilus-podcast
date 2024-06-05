export interface Mapper<M, D> {
    toDomain(dto: D): M
    toDomainList(dtos: D[]): M[]

    toApi(model: M): D
    toApiList(models: M[]): D[]
}