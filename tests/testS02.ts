// testS02.ts — S02 Singly Linked List test driver
// Provided by tinydsa-starter. Do NOT modify.
// The tester runs this file to verify your SinglyLinkedList implementation.

import { SinglyLinkedList } from "../src/index.js";

function emit(testName: string, result: string): void {
  console.log(`TEST:${testName}`);
  console.log(`RESULT:${result}`);
}

function arrStr(arr: number[]): string {
  return arr.join(",");
}

function main(): void {
  // --- 基本操作 ---
  const sll = new SinglyLinkedList();
  emit("initial_size", String(sll.size())); // 0

  // --- addFirst ---
  sll.addFirst(30);
  sll.addFirst(20);
  sll.addFirst(10);
  emit("size_after_3_add_first", String(sll.size())); // 3
  emit("to_array_after_add_first", arrStr(sll.toArray())); // 10,20,30

  // --- addLast ---
  const sll2 = new SinglyLinkedList();
  sll2.addLast(10);
  sll2.addLast(20);
  sll2.addLast(30);
  emit("to_array_after_add_last", arrStr(sll2.toArray())); // 10,20,30

  // --- 混合 addFirst/addLast ---
  const sll3 = new SinglyLinkedList();
  sll3.addFirst(20);
  sll3.addLast(30);
  sll3.addFirst(10);
  emit("to_array_mixed", arrStr(sll3.toArray())); // 10,20,30
  emit("size_mixed", String(sll3.size())); // 3

  // --- get ---
  emit("get_0", String(sll3.get(0))); // 10
  emit("get_1", String(sll3.get(1))); // 20
  emit("get_2", String(sll3.get(2))); // 30
  emit("get_out_of_bounds", String(sll3.get(5))); // -1
  emit("get_negative", String(sll3.get(-1))); // -1

  // --- removeFirst ---
  const sll4 = new SinglyLinkedList();
  sll4.addLast(10); sll4.addLast(20); sll4.addLast(30);
  emit("remove_first_val", String(sll4.removeFirst())); // 10
  emit("size_after_remove_first", String(sll4.size())); // 2
  emit("to_array_after_remove_first", arrStr(sll4.toArray())); // 20,30

  // --- removeFirst 空链表 ---
  const sll5 = new SinglyLinkedList();
  emit("remove_first_empty", String(sll5.removeFirst())); // -1

  // --- removeLast ---
  const sll6 = new SinglyLinkedList();
  sll6.addLast(10); sll6.addLast(20); sll6.addLast(30);
  emit("remove_last_val", String(sll6.removeLast())); // 30
  emit("size_after_remove_last", String(sll6.size())); // 2
  emit("to_array_after_remove_last", arrStr(sll6.toArray())); // 10,20

  // --- removeLast 空链表 ---
  const sll7 = new SinglyLinkedList();
  emit("remove_last_empty", String(sll7.removeLast())); // -1

  // --- removeLast 连续至空 ---
  const sll8 = new SinglyLinkedList();
  sll8.addLast(10); sll8.addLast(20); sll8.addLast(30);
  emit("remove_last_3", String(sll8.removeLast())); // 30
  emit("remove_last_2", String(sll8.removeLast())); // 20
  emit("remove_last_1", String(sll8.removeLast())); // 10
  emit("size_after_remove_all", String(sll8.size())); // 0
  emit("remove_last_when_empty", String(sll8.removeLast())); // -1

  // --- 删空再添加 ---
  const sll9 = new SinglyLinkedList();
  sll9.addFirst(10); sll9.addFirst(20);
  sll9.removeFirst(); sll9.removeFirst();
  emit("size_after_clear", String(sll9.size())); // 0
  sll9.addLast(99);
  emit("get_after_refill", String(sll9.get(0))); // 99
  emit("size_after_refill", String(sll9.size())); // 1

  // --- toArray 空链表 ---
  const sll10 = new SinglyLinkedList();
  emit("to_array_empty", arrStr(sll10.toArray())); // (empty string)
}

main();
