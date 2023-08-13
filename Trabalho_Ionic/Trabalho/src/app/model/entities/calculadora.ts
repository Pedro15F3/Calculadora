export class calculadora{
    private _numero1!: number;
    private _numero2!: number;
    private _teste1!: number;
    private _funcao!: number;


    constructor(numero1: number, numero2: number, funcao: number){
        this._numero1=numero1;
        this._numero2=numero2;
        this._funcao=funcao;
    }
    public get numero1() : number {
        return this._numero1;
    }
    public set numero1(numero1: number){
        this._numero1 = numero1;
    }
    public get numero2() : number {
        return this._numero2;
    }
    public set numero2(numero2: number){
        this._numero2 = numero2;
    }
    public get funcao() : number {
        return this._funcao;
    }
    public set funcao(funcao: number){
        this._funcao = funcao;
    }
    public get teste1() : number {
        return this._teste1;
    }
    public set teste1(teste1: number){
        this._teste1 = teste1;
    }
}
