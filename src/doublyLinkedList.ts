/**
 * DoublyLinkedList — 带双向哨兵的双向链表 Deque。
 *
 * 使用 sentinel head + sentinel tail 双哨兵模式，
 * 每个节点持有 prev 和 next 两个引用，实现两端 O(1) 操作。
 */

class DLLNode {
  val: number;
  prev: DLLNode | null;
  next: DLLNode | null;

  constructor(
    val: number = 0,
    prev: DLLNode | null = null,
    next: DLLNode | null = null,
  ) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList {
  private head: DLLNode; // sentinel head
  private tail: DLLNode; // sentinel tail
  private _size: number;

  constructor() {
    this.head = new DLLNode();
    this.tail = new DLLNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this._size = 0;
  }

  /** 在头部插入元素。O(1)。 */
  addFirst(val: number): void {
    throw new Error("TODO: S03");
  }

  /** 在尾部插入元素。O(1)。 */
  addLast(val: number): void {
    throw new Error("TODO: S03");
  }

  /** 删除并返回头部元素。空链表返回 -1。O(1)。 */
  removeFirst(): number {
    throw new Error("TODO: S03");
  }

  /** 删除并返回尾部元素。空链表返回 -1。O(1)。 */
  removeLast(): number {
    throw new Error("TODO: S03");
  }

  /** 按索引访问元素。越界返回 -1。O(n)。 */
  get(index: number): number {
    throw new Error("TODO: S03");
  }

  /** 返回当前元素个数。 */
  size(): number {
    throw new Error("TODO: S03");
  }

  /** 将链表元素按正序转为数组。 */
  toArray(): number[] {
    throw new Error("TODO: S03");
  }

  /** 将链表元素按反序转为数组（验证 prev 链正确性）。 */
  toArrayReverse(): number[] {
    throw new Error("TODO: S03");
  }
}
