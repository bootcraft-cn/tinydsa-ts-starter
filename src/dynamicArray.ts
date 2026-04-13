/**
 * DynamicArray — 手动扩容动态数组。
 *
 * 底层使用固定长度的 Array<number | undefined> 模拟原生数组。
 * 禁止使用 Array.push()、Array.splice() 等内置动态方法。
 *
 * 初始容量 8，满时扩容为 2 倍，使用率低于 25% 时缩容为 1/2（最小容量 8）。
 */

const DEFAULT_CAPACITY = 8;

export class DynamicArray {
  private data: (number | undefined)[];
  private _size: number;
  private _capacity: number;

  constructor() {
    this._capacity = DEFAULT_CAPACITY;
    this._size = 0;
    this.data = new Array<number | undefined>(this._capacity).fill(undefined);
  }

  /** 在末尾追加元素。若数组已满，先扩容再追加。 */
  add(val: number): void {
    throw new Error("TODO: S01");
  }

  /** 按索引访问元素。越界返回 -1。 */
  get(index: number): number {
    throw new Error("TODO: S01");
  }

  /** 按索引修改元素。越界不做任何操作。 */
  set(index: number, val: number): void {
    throw new Error("TODO: S01");
  }

  /**
   * 按索引删除元素并返回被删除的值。
   * 删除后右侧元素左移一位。越界返回 -1。
   * 若删除后 size < capacity / 4，缩容为 capacity / 2（最小 8）。
   */
  removeAt(index: number): number {
    throw new Error("TODO: S01");
  }

  /** 返回当前元素个数。 */
  size(): number {
    throw new Error("TODO: S01");
  }

  /** 返回当前底层数组的容量。 */
  capacity(): number {
    throw new Error("TODO: S01");
  }

  // ------------------------------------------------------------------
  // 内部方法（提示：你可能需要实现以下辅助方法）
  // ------------------------------------------------------------------

  /** 将底层数组扩容/缩容到 newCapacity。 */
  private resize(newCapacity: number): void {
    throw new Error("TODO: S01");
  }
}
