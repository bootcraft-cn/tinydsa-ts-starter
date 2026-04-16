/**
 * Stack — 基于 ArrayDeque 的栈实现（LIFO）。
 *
 * 将 ArrayDeque 作为底层，通过委托调用实现栈语义。
 * push/pop/peek 操作均基于 Deque 尾端。
 */

import { ArrayDeque } from "./arrayDeque.js";

export class Stack {
  private deque: ArrayDeque;

  constructor() {
    this.deque = new ArrayDeque();
  }

  /** 将元素压入栈顶。 */
  push(val: number): void {
    throw new Error("TODO: S05");
  }

  /** 弹出并返回栈顶元素。空栈返回 -1。 */
  pop(): number {
    throw new Error("TODO: S05");
  }

  /** 查看栈顶元素但不弹出。空栈返回 -1。 */
  peek(): number {
    throw new Error("TODO: S05");
  }

  /** 返回栈中元素个数。 */
  stackSize(): number {
    throw new Error("TODO: S05");
  }
}
