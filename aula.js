class Produto {
    constructor(nome, preco) {
      if (this.constructor === Produto) {
        throw new Error("Produto é uma classe abstrata e não pode ser instanciada diretamente.");
      }
      this.nome = nome;
      this.preco = preco;
    }
  
    preparar() {
      throw new Error("O método 'preparar()' deve ser implementado na subclasse.");
    }
  }
  
  class PratoPrincipal extends Produto {
    preparar() {
      return `Preparando o prato principal: ${this.nome}. Valor: R$${this.preco}`;
    }
  }
  
  class Sobremesa extends Produto {
    preparar() {
      return `Preparando a sobremesa: ${this.nome}. Valor: R$${this.preco}`;
    }
  }
  
  class Bebida extends Produto {
    preparar() {
      return `Servindo a bebida: ${this.nome}. Valor: R$${this.preco}`;
    }
  }
  
  class CriadorDoItem {
    criarItem() {
      throw new Error("O método 'criarItem()' deve ser implementado na subclasse.");
    }
  }
  
  class CriadorDePratoPrincipal extends CriadorDoItem {
    constructor(nome, preco) {
      super();
      this.nome = nome;
      this.preco = preco;
    }
  
    criarItem() {
      return new PratoPrincipal(this.nome, this.preco);
    }
  }
  
  class CriadorDeSobremesa extends CriadorDoItem {
    constructor(nome, preco) {
      super();
      this.nome = nome;
      this.preco = preco;
    }
  
    criarItem() {
      return new Sobremesa(this.nome, this.preco);
    }
  }
  
  class CriadorDeBebida extends CriadorDoItem {
    constructor(nome, preco) {
      super();
      this.nome = nome;
      this.preco = preco;
    }
  
    criarItem() {
      return new Bebida(this.nome, this.preco);
    }
  }
  
  class Pedido {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(item) {
      this.itens.push(item);
    }
  
    resumirPedido() {
      this.itens.forEach(item => {
        console.log(`Item: ${item.nome}`);
        console.log(`Preço: R$${item.preco}`);
        console.log(item.preparar());
        console.log('---');
      });
    }
  }
  
  const pedido = new Pedido();
  
  const criadorPrato = new CriadorDePratoPrincipal("Lasanha", 30);
  const prato = criadorPrato.criarItem();
  pedido.adicionarItem(prato);
  
  const criadorDoce = new CriadorDeSobremesa("Pudim", 12);
  const sobremesa = criadorDoce.criarItem();
  pedido.adicionarItem(sobremesa);
  
  const criadorBebida = new CriadorDeBebida("Suco de Laranja", 8);
  const bebida = criadorBebida.criarItem();
  pedido.adicionarItem(bebida);
  
  pedido.resumirPedido();
  