const produto: {produto:string, lote:number, ano: number, qtd: number}={
            produto: 'CPU Dual Core 3.0GHZ',
            lote: 322,
            ano: 2023,
            qtd: 3
        }

const geradorEtiquetas = (info:{
    produto:string,
    lote:number, 
    ano: number, 
    qtd: number}
    ): string[] => {

    const resultado:string[] = [];
    
    for (let i = 1; i<= info.qtd; i++){
        resultado.push(`${info.lote}-${info.ano}-${i.toString().padStart(3,'0')}`)
    }
    return resultado;
}

console.log(geradorEtiquetas(produto))

