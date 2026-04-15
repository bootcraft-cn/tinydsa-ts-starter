/**
 * ArrayDeque — 基于环形缓冲区的双端队列。
 *
 * 使用 head/tail 指针在固定数组上实现两端 O(1) 插入和删除，
 * 满时翻倍扩容。通过取模运算实现首尾环绕。
 */

const DEFAULT_CAPACITY = 8;

export class ArrayDeque {
  private data: (number | undefined)[];
  private head: number;
  private tail: number;
  private _size: number;
  private cap: number;

  constructor() {
    this.data = new Array<number | undefined>(DEFAULT_CAPACITY).fill(undefined);
    this.head = 0;
    this.tail = 0;
    this._size = 0;
    this.cap = DEFAULT_CAPACITY;
  }

  /** 在头部插入元素。均摊 O(1)。 */
  addFirst(val: number): void {
    throw new Error("TODO: S04");
  }

  /** 在尾部插入元素。均摊 O(1)。 */
  addLast(val: number): void {
    throw new Error("TODO: S04");
  }

  /** 删除并返回头部元素。空队列返回 -1。O(1)。 */
  removeFirst(): number {
    throw new Error("TODO: S04");
  }

  /** 删除并返回尾部元素。空队列返回 -1。O(1)。 */
  removeLast(): number {
    throw new Error("TODO: S04");
  }

  /** 按逻辑索引访问元素。越界返回 -1。O(1)。 */
  get(index: number): number {
    throw new Error("TODO: S04");
  }

  /** 返回当前元素个数。 */
  size(): number {
    throw new Error("TODO: S04");
  }

  /** 将队列元素按逻辑顺序转为数组。 */
  toArray(): number[] {
    throw new Error("TODO: S04");
  }
}
