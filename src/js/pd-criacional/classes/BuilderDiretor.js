export class Diretor {
  constructor() {
    this.parts = [];
  }

  setBuilder(builder) {
    this.builder = builder;
  };

  buildConversao() {
    this.builder.produzirCalc();
  };
}
