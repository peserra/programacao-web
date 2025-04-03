let campus: 'SA' | 'SBC' = 'SA';

campus = 'SBC';
// campus = 'SCS'; // Error: Type '"SCS"' is not assignable to type '"SA" | "SBC"'.

let status: 'presente' | 'ausente' | 'afastado' = 'presente';

status = 'ausente';
// status = 'licença'; // Error: Type '"licença"' is not assignable to type '"presente" | "ausente" | "afastado"'.

export {}