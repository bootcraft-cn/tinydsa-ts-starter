/**
 * SinglyLinkedList — 带哨兵节点的单链表。
 *
 * 使用 sentinel（哨兵）节点简化头部操作。
 * 节点通过 next 引用串联，不使用连续内存。
 */

class SLLNode {
  val: number;
  next: SLLNode | null;

  constructor(val: number = 0, next: SLLNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class SinglyLinkedList {
  private sentinel: SLLNode;
  private _size: number;

  constructor() {
    this.sentinel = new SLLNode();
    this._size = 0;
  }

  /** 在头部插入元素。O(1)。 */
  addFirst(val: number): void {
    throw new Error("TODO: S02");
  }

  /** 在尾部插入元素。O(n)。 */
  addLast(val: number): void {
    throw new Error("TODO: S02");
  }

  /** 删除并返回头部元素。空链表返回 -1。O(1)。 */
  removeFirst(): number {
    throw new Error("TODO: S02");
  }

  /** 删除并返回尾部元素。空链表返回 -1。O(n)。 */
  removeLast(): number {
    throw new Error("TODO: S02");
  }

  /** 按索引访问元素。越界返回 -1。O(n)。 */
  get(index: number): number {
    throw new Error("TODO: S02");
  }

  /** 返回当前元素个数。 */
  size(): number {
    throw new Error("TODO: S02");
  }

  /** 将链表元素按顺序转为数组。 */
  toArray(): number[] {
    throw new Error("TODO: S02");
  }
}
