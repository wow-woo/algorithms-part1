type targets = {
  a: number;
  b: number;
};

class QuickUnionUF {
  arr: number[];
  constructor(n: number) {
    this.arr = Array(n);

    for (let i = 0; i < n; i++) {
      this.arr[i] = i;
    }
    console.log("init", this.arr);
  }

  root(a: number): number {
    while (a !== this.arr[a]) {
      a = this.arr[a];
    }
    return a;
  }

  isConnected(a: number, b: number): boolean {
    console.log(this.root(a) === this.root(b));

    return this.root(a) === this.root(b);
  }

  union(p: number, q: number): void {
    const i = this.root(p);
    const j = this.root(q);

    this.arr[i] = j;

    return console.log(this.arr);
  }
}

const obj = new QuickUnionUF(5);

// obj.isConnected(1, 3);
// obj.isConnected(1, 2);
// obj.isConnected(0, 4);

obj.union(1, 3);
obj.union(2, 0);
obj.union(3, 2);
