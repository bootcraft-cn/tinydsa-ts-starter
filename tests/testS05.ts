// testS05.ts — S05 Stack & Queue test driver
// Provided by tinydsa-starter. Do NOT modify.
// The tester runs this file to verify your Stack and Queue implementation.

import { Stack, Queue } from "../src/index.js";

function emit(testName: string, result: string): void {
  console.log(`TEST:${testName}`);
  console.log(`RESULT:${result}`);
}

function main(): void {
  // ===== Stack Tests =====

  // --- 基本操作 ---
  const s = new Stack();
  emit("stack_initial_size", String(s.stackSize())); // 0

  // --- push + pop (LIFO) ---
  s.push(1);
  s.push(2);
  s.push(3);
  emit("stack_pop_1", String(s.pop())); // 3
  emit("stack_pop_2", String(s.pop())); // 2
  emit("stack_pop_3", String(s.pop())); // 1

  // --- 空栈 pop ---
  emit("stack_pop_empty", String(s.pop())); // -1

  // --- peek ---
  const s2 = new Stack();
  s2.push(10);
  s2.push(20);
  emit("stack_peek", String(s2.peek())); // 20
  emit("stack_size_after_peek", String(s2.stackSize())); // 2

  // --- 空栈 peek ---
  const s3 = new Stack();
  emit("stack_peek_empty", String(s3.peek())); // -1

  // --- push + pop + size ---
  const s4 = new Stack();
  s4.push(10);
  s4.push(20);
  s4.push(30);
  emit("stack_size_3", String(s4.stackSize())); // 3
  s4.pop();
  emit("stack_size_after_pop", String(s4.stackSize())); // 2

  // --- 多次 push/pop 交替 ---
  const s5 = new Stack();
  s5.push(1);
  s5.push(2);
  emit("stack_alternate_pop_1", String(s5.pop())); // 2
  s5.push(3);
  emit("stack_alternate_peek", String(s5.peek())); // 3
  emit("stack_alternate_pop_2", String(s5.pop())); // 3
  emit("stack_alternate_pop_3", String(s5.pop())); // 1
  emit("stack_alternate_size", String(s5.stackSize())); // 0

  // ===== Queue Tests =====

  // --- 基本操作 ---
  const q = new Queue();
  emit("queue_initial_size", String(q.queueSize())); // 0

  // --- enqueue + dequeue (FIFO) ---
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  emit("queue_dequeue_1", String(q.dequeue())); // 1
  emit("queue_dequeue_2", String(q.dequeue())); // 2
  emit("queue_dequeue_3", String(q.dequeue())); // 3

  // --- 空队列 dequeue ---
  emit("queue_dequeue_empty", String(q.dequeue())); // -1

  // --- front ---
  const q2 = new Queue();
  q2.enqueue(10);
  q2.enqueue(20);
  emit("queue_front", String(q2.front())); // 10
  emit("queue_size_after_front", String(q2.queueSize())); // 2

  // --- 空队列 front ---
  const q3 = new Queue();
  emit("queue_front_empty", String(q3.front())); // -1

  // --- enqueue + dequeue + size ---
  const q4 = new Queue();
  q4.enqueue(10);
  q4.enqueue(20);
  q4.enqueue(30);
  emit("queue_size_3", String(q4.queueSize())); // 3
  q4.dequeue();
  emit("queue_size_after_dequeue", String(q4.queueSize())); // 2

  // --- 多次 enqueue/dequeue 交替 ---
  const q5 = new Queue();
  q5.enqueue(1);
  q5.enqueue(2);
  emit("queue_alternate_dequeue_1", String(q5.dequeue())); // 1
  q5.enqueue(3);
  emit("queue_alternate_front", String(q5.front())); // 2
  emit("queue_alternate_dequeue_2", String(q5.dequeue())); // 2
  emit("queue_alternate_dequeue_3", String(q5.dequeue())); // 3
  emit("queue_alternate_size", String(q5.queueSize())); // 0
}

main();
