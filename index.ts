type targets = {
  a: number;
  b: number;
};

class QuickUnionUF {
  arr: number[];
  sz: number[];

  constructor(n: number) {
    this.arr = Array(n);
    this.sz = Array(n).fill(1);

    for (let i = 0; i < n; i++) {
      this.arr[i] = i;
    }
    console.log("init-arr", this.arr);
    console.log("init-sz", this.sz);
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
    if (i === j) return;

    if (this.sz[i] < this.sz[j]) {
      this.arr[i] = j;

      this.sz[j] += this.sz[i];
    } else {
      this.arr[j] = i;

      this.sz[i] += this.sz[j];
    }

    console.log("weight", this.sz);
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
