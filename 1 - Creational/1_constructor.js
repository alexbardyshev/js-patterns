// The most populas pattern in JS

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `http://${this.ip}:80`;
  }
}

const aws = new Server('AWS German', '82.81.32.90')
console.log(aws.getUrl())
