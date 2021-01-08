enum Computer {
  PC,
  LAPTOP,
}

abstract class ComputerPart{

  static getFactory(key:Computer){
      const pcFactory = new PcFactory();
      const laptopFactory = new LaptopFactory();

      switch (key) {
          case Computer.PC:
              return pcFactory;
          case Computer.LAPTOP:
              return laptopFactory;
          default:
              return laptopFactory;
      }
  }

  abstract getProcessor();
  abstract getVideocard();
}

class PcProcessor {
  makePart(){
      return 'I`m the processor for a PC!';
  }
}
class PcVideocard {
  makePart(){
      return 'I`m the videocard for a PC!';
  }
}
class LaptopProcessor {
  makePart(){
      return 'I`m the processor for a laptop!';
  }
}
class LaptopVideocard {
  makePart(){
      return 'I`m the videocard for a laptop!';
  }
}

class PcFactory extends ComputerPart{
  getProcessor() {
      return new PcProcessor();
  }    
  
  getVideocard() {
      return new PcVideocard();
  }
}

class LaptopFactory extends ComputerPart{
  getProcessor() {
    return new LaptopProcessor();
}    

  getVideocard() {
    return new LaptopVideocard();
  }
}


let factory =  ComputerPart.getFactory(Computer.PC);
let processor = factory.getProcessor();

console.log(processor.makePart());

factory =  ComputerPart.getFactory(Computer.LAPTOP);
processor = factory.getProcessor();
let videocard = factory.getVideocard();

console.log(processor.makePart());
console.log(videocard.makePart());