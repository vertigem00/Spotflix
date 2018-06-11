export class Data {
    protected dia : number;
    protected mes : number;
    protected ano : number;
    public constructor(dia : number, mes : number, ano : number){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }


	public getdia(): number {
		return this.dia;
	}

	public getmes(): number {
		return this.mes;
	}
	public getano(): number { 
        
		return this.ano;
	}
	public setdia(value: number) {
		this.dia = value;
	}
	public setmes(value: number) {
		this.mes = value;
	}
	public setano(value: number) {
		this.ano = value;
	}
	
	public toString() : string {
		let res : string = this.dia + "/" + this.mes + "/" + this.ano;
		return res;
	}
}