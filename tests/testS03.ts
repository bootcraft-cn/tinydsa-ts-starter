// testS03.ts — S03 Doubly Linked List test driver
// Provided by tinydsa-starter. Do NOT modify.
// The tester runs this file to verify your DoublyLinkedList implementation.

import { DoublyLinkedList } from "../src/index.js";

function emit(testName: string, result: string): void {
  console.log(`TEST:${testName}`);
  console.log(`RESULT:${result}`);
}

function arrStr(arr: number[]): string {
  return arr.join(",");
}

function main(): void {
  // --- 基本操作 ---
  const dll = new DoublyLinkedList();
  emit("initial_size", String(dll.size())); // 0

  // --- addFirst ---
  dll.addFirst(30);
  dll.addFirst(20);
  dll.addFirst(10);
  emit("size_after_3_add_first", String(dll.size())); // 3
  emit("to_array_after_add_first", arrStr(dll.toArray())); // 10,20,30
  emit("to_array_reverse_after_add_first", arrStr(dll.toArrayReverse())); // 30,20,10

  // --- addLast ---
  const dll2 = new DoublyLinkedList();
  dll2.addLast(10);
  dll2.addLast(20);
  dll2.addLast(30);
  emit("to_array_after_add_last", arrStr(dll2.toArray())); // 10,20,30
  emit("to_array_reverse_after_add_last", arrStr(dll2.toArrayReverse())); // 30,20,10

  // --- 混合 addFirst/addLast ---
  const dll3 = new DoublyLinkedList();
  dll3.addFirst(20);
  dll3.addLast(30);
  dll3.addFirst(10);
  dll3.addLast(40);
  emit("to_array_mixed", arrStr(dll3.toArray())); // 10,20,30,40
  emit("to_array_reverse_mixed", arrStr(dll3.toArrayReverse())); // 40,30,20,10
  emit("size_mixed", String(dll3.size())); // 4

  // --- get ---
  emit("get_0", String(dll3.get(0))); // 10
  emit("get_1", String(dll3.get(1))); // 20
  emit("get_3", String(dll3.get(3))); // 40
  emit("get_out_of_bounds", String(dll3.get(10))); // -1
  emit("get_negative", String(dll3.get(-1))); // -1

  // --- removeFirst ---
  const dll4 = new DoublyLinkedList();
  dll4.addLast(10); dll4.addLast(20); dll4.addLast(30);
  emit("remove_first_val", String(dll4.removeFirst())); // 10
  emit("size_after_remove_first", String(dll4.size())); // 2
  emit("to_array_after_remove_first", arrStr(dll4.toArray())); // 20,30
  emit("to_array_reverse_after_remove_first", arrStr(dll4.toArrayReverse())); // 30,20

  // --- removeFirst 空链表 ---
  const dll5 = new DoublyLinkedList();
  emit("remove_first_empty", String(dll5.removeFirst())); // -1

  // --- removeLast ---
  const dll6 = new DoublyLinkedList();
  dll6.addLast(10); dll6.addLast(20); dll6.addLast(30);
  emit("remove_last_val", String(dll6.removeLast())); // 30
  emit("size_after_remove_last", String(dll6.size())); // 2
  emit("to_array_after_remove_last", arrStr(dll6.toArray())); // 10,20
  emit("to_array_reverse_after_remove_last", arrStr(dll6.toArrayReverse())); // 20,10

  // --- removeLast 空链表 ---
  const dll7 = new DoublyLinkedList();
  emit("remove_last_empty", String(dll7.removeLast())); // -1

  // --- 交替 removeFirst/removeLast ---
  const dll8 = new DoublyLinkedList();
  dll8.addLast(10); dll8.addLast(20); dll8.addLast(30); dll8.addLast(40);
  emit("alternate_remove_first", String(dll8.removeFirst())); // 10
  emit("alternate_remove_last", String(dll8.removeLast())); // 40
  emit("to_array_after_alternate", arrStr(dll8.toArray())); // 20,30
  emit("to_array_reverse_after_alternate", arrStr(dll8.toArrayReverse())); // 30,20
  emit("size_after_alternate", String(dll8.size())); // 2

  // --- removeLast 连续至空 ---
  const dll9 = new DoublyLinkedList();
  dll9.addLast(10); dll9.addLast(20); dll9.addLast(30);
  emit("remove_last_3", String(dll9.removeLast())); // 30
  emit("remove_last_2", String(dll9.removeLast())); // 20
  emit("remove_last_1", String(dll9.removeLast())); // 10
  emit("size_after_remove_all", String(dll9.size())); // 0
  emit("remove_last_when_empty", String(dll9.removeLast())); // -1

  // --- 删空再添加（哨兵不被破坏） ---
  const dll10 = new DoublyLinkedList();
  dll10.addFirst(10); dll10.addLast(20);
  dll10.removeFirst(); dll10.removeLast();
  emit("size_after_clear", String(dll10.size())); // 0
  dll10.addLast(99); dll10.addFirst(88);
  emit("to_array_after_refill", arrStr(dll10.toArray())); // 88,99
  emit("to_array_reverse_after_refill", arrStr(dll10.toArrayReverse())); // 99,88
  emit("size_after_refill", String(dll10.size())); // 2

  // --- toArray / toArrayReverse 空链表 ---
  const dll11 = new DoublyLinkedList();
  emit("to_array_empty", arrStr(dll11.toArray())); // (empty string)
  emit("to_array_reverse_empty", arrStr(dll11.toArrayReverse())); // (empty string)
}

main();
