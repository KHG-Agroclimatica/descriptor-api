interface CreateDTO {
  name: string;
  description: string;
  typeField: number;
}

interface UpdateDTO extends CreateDTO {
  id: string;
}
