interface AbstractFactory {
  createPC(): AbstractPC;
  createLaptop(): AbstractLaptop;
}

class LvivFactory implements AbstractFactory {
  createPC(): PC {
    return new PC('PC made in Lviv');
  }

  createLaptop(): Laptop {
    return new Laptop('Laptop made in Lviv');
  }
}

class KharkivFactory implements AbstractFactory {
  createPC(): PC {
    return new PC('PC made in Kharkiv');
  }

  createLaptop(): Laptop {
    return new Laptop('Laptop made in Kharkiv');
  }
}

interface AbstractPC {
  methodA(): void;
  methodB(): void;
}

class PC implements AbstractPC {
  constructor(value: String) {
    console.log(value);
  }
  methodA(): void {}
  methodB(): void {}
}

interface AbstractLaptop {
  methodA(): void;
  methodB(): void;
}

class Laptop implements AbstractLaptop {
  constructor(value: String) {
    console.log(value);
  }
  methodA(): void {}
  methodB(): void {}
}

(function main() {
  const lvivFactory = new LvivFactory();
  lvivFactory.createPC();
  lvivFactory.createLaptop();

  const kharkivFactory = new KharkivFactory();
  kharkivFactory.createPC();
  kharkivFactory.createLaptop();
})();