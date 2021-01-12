// target
interface IVideoplayer {
  name: string;
  volume: number;
  play(): void;
  load(url: string): void;
  pause(): void;
  setVolume(volume: number): void;
  getVolume(): void;
  mute(mute: boolean): void;
}

// adaptee (3rd party)
interface IFancyPlayer {
  name: string;
  volume: number;
  playUrl(): void;
  setPause(isInPause: boolean): void;
  setVolume(volume: number): void;
  getVolume(): void;
  mute(mute: boolean): void;
}

interface IAnotherFancyPlayer {
  name: string;
  volume: number;
  play(url: string): void;
  pause(pause: boolean): void;
  setVolume(volume: number): void;
  getVolume(): void;
  mute(mute: boolean): void;
}

class FancyPlayer implements IFancyPlayer {
  public name: string;
  public volume: number;

  constructor(name: string, volume: number){
    this.name = name;
    this.volume = volume;
  }

  public playUrl(): void {
    console.log(`${this.name} is playing a video!`);
  }

  public setPause(isInPause: boolean): void {
    if(isInPause){
      console.log(`${this.name} is paused!`);
    } else {
      console.log(`${this.name} is playing!`);
    }
  }

  public setVolume(volume: number): void {
    console.log(`${this.name} is setting volume on ${volume}!`);
  }

  public getVolume(): void {
    console.log(`${this.name} has volume: ${this.volume}!`);
  }

  public mute(mute: boolean): void {
    if(mute){
      console.log(`${this.name} is muted!`);
    } else {
      console.log(`${this.name} is not muted!`);
    }
  }
}
class AnotherFancyPlayer implements IAnotherFancyPlayer {
  public name: string;
  public volume: number;
  constructor(name: string, volume: number){
    this.name = name;
    this.volume = volume;
  }

  public play(url: string): void {
    console.log(`${this.name} is playing a video: ${url}!`);
  }

  public pause(pause: boolean): void {
    if(pause){
      console.log(`${this.name} is paused!`);
    } else {
      console.log(`${this.name} is playing!`);
    }
  }

  public setVolume(volume: number): void {
    console.log(`${this.name} is setting volume on ${volume}!`);
  }

  public getVolume(): void {
    console.log(`${this.name} has volume: ${this.volume}!`);
  }
  
  public mute(mute: boolean): void {
    if(mute){
      console.log(`${this.name} is muted!`);
    } else {
      console.log(`${this.name} is not muted!`);
    }
  }
}

// adapters
class FancyPlayerAdapter implements IVideoplayer {
  name: string;
  volume: number;
  private player: FancyPlayer;

  constructor(name: string, volume: number) {
    this.name = name;
    this.volume = volume;
    this.player = new FancyPlayer(this.name, this.volume);
  }

  getVolume(): void {
    return this.player.getVolume();
  }

  load(url: string): void {
    return this.player.playUrl();
  }

  mute(mute: boolean): void {
    return this.player.mute(mute);
  }

  pause(): void {
    return this.player.setPause(true);
  }

  play(): void {
    return this.player.setPause(false);
  }

  setVolume(volume: number): void {
    return this.player.setVolume(volume);
  }
}

class AnotherFancyPlayerAdapter implements IVideoplayer {
  name: string;
  volume: number;
  private player: AnotherFancyPlayer;

  constructor(name: string, volume: number) {
    this.name = name;
    this.volume = volume;
    this.player = new AnotherFancyPlayer(this.name, this.volume);
  }

  getVolume(): void {
    return this.player.getVolume();
  }

  load(url: string): void {
    return this.player.play(url);
  }

  mute(mute: boolean): void {
    return this.player.mute(mute);
  }

  pause(): void {
    return this.player.pause(true);
  }

  play(): void {
    return this.player.pause(false);
  }

  setVolume(volume: number): void {
    return this.player.setVolume(volume);
  }
}

// client code

const videoplayer:IVideoplayer = new FancyPlayerAdapter("VLC", 100);
videoplayer.play();

const videoplayer2:IVideoplayer = new AnotherFancyPlayerAdapter("SMP", 99);
videoplayer2.play();
