// target

interface IVideoplayer {
  name: string;
  volume: number;
  Play: Function;
}

class Videoplayer implements IVideoplayer {
  public name: string;
  public volume: number;
  constructor(name: string, volume: number){
      this.name = name;
      this.volume = volume;
  }
  public Play() {
      console.log(`${this.name} is playing a video!`);
  }
}

// adaptee (3rd party)

interface IUkrainianVideoplayer {
  назва: string;
  звук: number;
  Грати: Function;
}
class UkrainianVideoplayer implements IUkrainianVideoplayer {
  public назва: string;
  public звук: number;
  constructor(назва: string, звук: number){
      this.назва = назва;
      this.звук = звук;
  }
  public Грати() {
      console.log(`${this.назва} відтворює відео!`);
  }
}
enum VideoplayerType {
  Ukrainian,
  Global
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
  public Play() {
      if (this.type === VideoplayerType.Ukrainian) {
          const назва = this.name;
          const звук = this.volume;
          const відеоплеєр = new UkrainianVideoplayer(назва, звук);
          відеоплеєр.Грати();
      } else if (this.type === VideoplayerType.Global) {
          const videoplayer = new Videoplayer(this.name, this.volume);
          videoplayer.Play();
      } else {
          throw new Error("Unknown videoplayer!");
      }
  }
}

// client

const videoplayer:IVideoplayer = new VideoplayerAdapter("VLC", 100, VideoplayerType.Global);
videoplayer.Play();

const videoplayer2:IVideoplayer = new VideoplayerAdapter("Люкс-відеоплеєр", 99, VideoplayerType.Ukrainian);
videoplayer2.Play();