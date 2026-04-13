// testS01.ts — S01 Dynamic Array test driver
// Provided by tinydsa-starter. Do NOT modify.
// The tester runs this file to verify your DynamicArray implementation.

import { DynamicArray } from "../src/index.js";

function emit(testName: string, result: string): void {
  console.log(`TEST:${testName}`);
  console.log(`RESULT:${result}`);
}

function main(): void {
  // --- 基本操作 ---
  const arr = new DynamicArray();
  emit("initial_size", String(arr.size()));         // 0
  emit("initial_capacity", String(arr.capacity())); // 8

  // --- add + get ---
  arr.add(10);
  arr.add(20);
  arr.add(30);
  emit("size_after_3_adds", String(arr.size()));   // 3
  emit("get_0", String(arr.get(0)));               // 10
  emit("get_1", String(arr.get(1)));               // 20
  emit("get_2", String(arr.get(2)));               // 30

  // --- get 越界 ---
  emit("get_out_of_bounds", String(arr.get(5)));   // -1
  emit("get_negative", String(arr.get(-1)));       // -1

  // --- set ---
  arr.set(1, 99);
  emit("get_after_set", String(arr.get(1)));       // 99
  arr.set(100, 42); // 越界，不操作
  emit("size_after_oob_set", String(arr.size()));  // 3

  // --- 扩容 ---
  const arr2 = new DynamicArray();
  for (let i = 0; i < 8; i++) arr2.add(i);
  emit("cap_before_expand", String(arr2.capacity())); // 8
  arr2.add(8); // 第 9 个元素触发扩容
  emit("cap_after_expand", String(arr2.capacity()));  // 16
  emit("size_after_expand", String(arr2.size()));      // 9
  emit("get_8_after_expand", String(arr2.get(8)));    // 8

  // --- 扩容后数据完整性 ---
  let intact = true;
  for (let i = 0; i < 9; i++) {
    if (arr2.get(i) !== i) { intact = false; break; }
  }
  emit("data_intact_after_expand", String(intact)); // true

  // --- removeAt 基本 ---
  const arr3 = new DynamicArray();
  arr3.add(10); arr3.add(20); arr3.add(30); arr3.add(40);
  const removed = arr3.removeAt(1);
  emit("removeAt_return", String(removed));           // 20
  emit("size_after_remove", String(arr3.size()));      // 3
  emit("get_1_after_remove", String(arr3.get(1)));     // 30
  emit("get_2_after_remove", String(arr3.get(2)));     // 40

  // --- removeAt 越界 ---
  emit("removeAt_oob", String(arr3.removeAt(10))); // -1

  // --- 缩容 ---
  const arr4 = new DynamicArray();
  for (let i = 0; i < 16; i++) arr4.add(i);
  emit("cap_16_elements", String(arr4.capacity())); // 16

  for (let j = 0; j < 13; j++) arr4.removeAt(arr4.size() - 1);
  emit("size_after_removes", String(arr4.size()));      // 3
  emit("cap_after_shrink", String(arr4.capacity()));    // 8

  // --- 缩容后数据完整性 ---
  emit("get_0_after_shrink", String(arr4.get(0))); // 0
  emit("get_1_after_shrink", String(arr4.get(1))); // 1
  emit("get_2_after_shrink", String(arr4.get(2))); // 2

  // --- 删空再添加 ---
  const arr5 = new DynamicArray();
  arr5.add(1); arr5.add(2);
  arr5.removeAt(0); arr5.removeAt(0);
  emit("size_empty", String(arr5.size()));           // 0
  arr5.add(100);
  emit("get_after_refill", String(arr5.get(0)));     // 100
  emit("size_after_refill", String(arr5.size()));     // 1
}

main();
