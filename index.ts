class QuickFindUF {
  id: number[];

  constructor(n: number) {
    this.id = Array(n);

    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  isConnected(a: number, b: number): void {
    return console.log(this.id[a] === this.id[b]);
  }

  union(a: number, b: number): void {
    if (this.id[a] !== this.id[b]) {
      const aid = this.id[a];

      for (let i = 0; i < this.id.length; i++) {
        if (this.id[i] === aid) this.id[i] = b;
      }
    }
    console.log(this.id);
  }
}

const obj = new QuickFindUF(5);
console.log(obj);

obj.isConnected(1, 3);
obj.isConnected(2, 3);
obj.isConnected(0, 1);

obj.union(0, 2);
obj.union(0, 4);
obj.union(0, 1);
obj.union(2, 3);
