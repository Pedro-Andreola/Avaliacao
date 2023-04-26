let res = document.getElementById('res')
let adicionar = document.getElementById('add')
let concluir = document.getElementById('calc')
let vlr = 0
let lista = []
adicionar.addEventListener('click', ()=>{
    let pedido = []
    let item = document.getElementById('item').value
    let qtd = Number(document.getElementById('qtd').value)
    let preco = Number(document.getElementById('preco').value)
    
    lista.push(item)
    lista.push(qtd)
    pedido.push(item)
    pedido.push(qtd)
    pedido.push(preco)

    vlr = vlr + (pedido[1] * pedido[2])

    concluir.addEventListener('click', ()=>{
        if(vlr>=100){
            vlr = vlr - (vlr * 0.05)
        }
        res.innerHTML = "O total Foi R$" + vlr + " Os pedidos foram " + lista 
    })
})