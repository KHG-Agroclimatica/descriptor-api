export default class TuaniController {
    name: string;

    constructor(){
        this.name = 'asdawdas';
        console.log(this.name);
    }

    getName = (req: any, res: any) => {
        console.log(this);
        res.send(this.name);
    }

    getAll(req: any, res: any){
        console.log(this);
        res.send(this.name);
    }

    create(req: any, res: any){
        res.json({
            name: this.name
        });
    }
}