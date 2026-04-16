/**
 * Queue — 基于 ArrayDeque 的队列实现（FIFO）。
 *
 * 将 ArrayDeque 作为底层，通过委托调用实现队列语义。
 * enqueue 在尾端，dequeue/front 在头端。
 */

import { ArrayDeque } from "./arrayDeque.js";

export class Queue {
  private deque: ArrayDeque;

  constructor() {
    this.deque = new ArrayDeque();
  }

  /** 将元素加入队尾。 */
  enqueue(val: number): void {
    throw new Error("TODO: S05");
  }

  /** 取出并返回队首元素。空队列返回 -1。 */
  dequeue(): number {
    throw new Error("TODO: S05");
  }

  /** 查看队首元素但不取出。空队列返回 -1。 */
  front(): number {
    throw new Error("TODO: S05");
  }

  /** 返回队列中元素个数。 */
  queueSize(): number {
    throw new Error("TODO: S05");
  }
}
