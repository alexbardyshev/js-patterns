// This pattern is used when we need often create instance of certain class with different values

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function() {
      console.log(`${this.name} ${this.type}: ${this.cost}`);
    }

    return member;
  }
}

const factory = new MemberFactory();
const members = [
  factory.create('John Doe','standard'),
  factory.create('Alex Doe','premium'),
  factory.create('John Hue','simple')
]

console.log(members)

members.forEach(member => {
  member.define()
})
