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
  setPause(): void;
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

  public setPause(): void {
    console.log(`${this.name} is paused!`);
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

enum VideoplayerType {
  FancyPlayer,
  AnotherFancyPlayer,
}

// adapter

class VideoplayerAdapter implements IVideoplayer {
  public name: string;
  public volume: number;
  public type: VideoplayerType;
  constructor(name: string, volume: number, type: VideoplayerType) {
    this.type = type;
    this.name = name;
    this.volume = volume;
  }

  public play(): void {
    if (this.type === VideoplayerType.FancyPlayer) {
      const videoplayer1 = new FancyPlayer(this.name, this.volume);
      videoplayer1.playUrl();
    } else if (this.type === VideoplayerType.AnotherFancyPlayer) {
      const videoplayer2 = new AnotherFancyPlayer(this.name, this.volume);
      videoplayer2.play("https://www.youtube.com/watch?v=btPJPFnesV4");
    } else {
      throw new Error("Unknown videoplayer!");
    }
  }

  public load(url: string): void {
    if (this.type === VideoplayerType.FancyPlayer) {
      const videoplayer1 = new FancyPlayer(this.name, this.volume);
      videoplayer1.playUrl();
    } else if (this.type === VideoplayerType.AnotherFancyPlayer) {
      const videoplayer2 = new AnotherFancyPlayer(this.name, this.volume);
      videoplayer2.play(url);
    } else {
      throw new Error("Unknown videoplayer!");
    }
  }

  public pause(): void {
    if (this.type === VideoplayerType.FancyPlayer) {
      const videoplayer1 = new FancyPlayer(this.name, this.volume);
      videoplayer1.setPause();
    } else if (this.type === VideoplayerType.AnotherFancyPlayer) {
      const videoplayer2 = new AnotherFancyPlayer(this.name, this.volume);
      videoplayer2.pause(true);
    } else {
      throw new Error("Unknown videoplayer!");
    }
  }

	public setVolume(volume: number): void {
    if (this.type === VideoplayerType.FancyPlayer) {
      const videoplayer1 = new FancyPlayer(this.name, this.volume);
      videoplayer1.setVolume(volume);
    } else if (this.type === VideoplayerType.AnotherFancyPlayer) {
      const videoplayer2 = new AnotherFancyPlayer(this.name, this.volume);
      videoplayer2.setVolume(volume);
    } else {
      throw new Error("Unknown videoplayer!");
    }
  }

	public getVolume(): void {
    if (this.type === VideoplayerType.FancyPlayer) {
      const videoplayer1 = new FancyPlayer(this.name, this.volume);
      videoplayer1.getVolume();
    } else if (this.type === VideoplayerType.AnotherFancyPlayer) {
      const videoplayer2 = new AnotherFancyPlayer(this.name, this.volume);
      videoplayer2.getVolume();
    } else {
      throw new Error("Unknown videoplayer!");
    }
  }

	public mute(mute: boolean): void {
    if (this.type === VideoplayerType.FancyPlayer) {
      const videoplayer1 = new FancyPlayer(this.name, this.volume);
      videoplayer1.mute(mute);
    } else if (this.type === VideoplayerType.AnotherFancyPlayer) {
      const videoplayer2 = new AnotherFancyPlayer(this.name, this.volume);
      videoplayer2.mute(mute);
    } else {
      throw new Error("Unknown videoplayer!");
    }
  }
}

// client

const videoplayer:IVideoplayer = new VideoplayerAdapter("VLC", 100, VideoplayerType.FancyPlayer);
videoplayer.play();

const videoplayer2:IVideoplayer = new VideoplayerAdapter("SMP", 99, VideoplayerType.AnotherFancyPlayer);
videoplayer2.play();