export interface RegisterDescriptorDTO {
    _id?: string;
    name: string;
    description: string;
    fieldIds: Array<string>;
    countryIds: Array<string>;
    classificationId: String;
}
