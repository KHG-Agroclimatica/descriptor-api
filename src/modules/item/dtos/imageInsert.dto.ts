interface ITraductionDTO {
    name: string;
    language: number;
}

export interface ImageInsertDTO {
    imageId?: string,
    fieldId: string,
    name: string;
    uri: string;
    traductionName: Array<ITraductionDTO>
}