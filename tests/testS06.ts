// testS06.ts — S06 BST: Search & Insert test driver
// Provided by tinydsa-starter. Do NOT modify.

import { BST } from "../src/index.js";

function emit(testName: string, result: string): void {
  console.log(`TEST:${testName}`);
  console.log(`RESULT:${result}`);
}

function main(): void {
  // --- Group 1: Empty tree ---
  const bst = new BST();
  emit("bst_empty_size", String(bst.size()));
  emit("bst_empty_get", String(bst.get("any")));
  emit("bst_empty_contains", String(bst.contains("any")));
  emit("bst_empty_keys", bst.keys().join(","));

  // --- Group 2: Single insert ---
  const bst2 = new BST();
  bst2.put("hello", 42);
  emit("bst_single_size", String(bst2.size()));
  emit("bst_single_get", String(bst2.get("hello")));
  emit("bst_single_contains", String(bst2.contains("hello")));
  emit("bst_single_missing", String(bst2.contains("world")));

  // --- Group 3: Multiple inserts + in-order keys ---
  const bst3 = new BST();
  bst3.put("dog", 3);
  bst3.put("cat", 1);
  bst3.put("elk", 5);
  bst3.put("ant", 2);
  bst3.put("bee", 4);
  emit("bst_multi_size", String(bst3.size()));
  emit("bst_multi_keys", bst3.keys().join(","));
  emit("bst_multi_get_first", String(bst3.get("ant")));
  emit("bst_multi_get_last", String(bst3.get("elk")));

  // --- Group 4: Update existing key ---
  bst3.put("cat", 999);
  emit("bst_update_get", String(bst3.get("cat")));
  emit("bst_update_size", String(bst3.size()));
  emit("bst_update_keys", bst3.keys().join(","));

  // --- Group 5: Get/contains edge cases ---
  emit("bst_get_missing", String(bst3.get("zzz")));
  emit("bst_contains_existing", String(bst3.contains("dog")));
  emit("bst_contains_missing", String(bst3.contains("fox")));

  // --- Group 6: Left-skewed tree ---
  const bst4 = new BST();
  bst4.put("e", 5);
  bst4.put("d", 4);
  bst4.put("c", 3);
  bst4.put("b", 2);
  bst4.put("a", 1);
  emit("bst_left_keys", bst4.keys().join(","));
  emit("bst_left_size", String(bst4.size()));
  emit("bst_left_get", String(bst4.get("a")));

  // --- Group 7: Right-skewed tree ---
  const bst5 = new BST();
  bst5.put("a", 1);
  bst5.put("b", 2);
  bst5.put("c", 3);
  bst5.put("d", 4);
  bst5.put("e", 5);
  emit("bst_right_keys", bst5.keys().join(","));
  emit("bst_right_size", String(bst5.size()));
  emit("bst_right_get", String(bst5.get("e")));

  // --- Group 8: Large tree ---
  const bst6 = new BST();
  bst6.put("m", 13);
  bst6.put("g", 7);
  bst6.put("t", 20);
  bst6.put("d", 4);
  bst6.put("j", 10);
  bst6.put("p", 16);
  bst6.put("w", 23);
  bst6.put("b", 2);
  bst6.put("f", 6);
  bst6.put("n", 14);
  emit("bst_large_size", String(bst6.size()));
  emit("bst_large_keys", bst6.keys().join(","));
  emit("bst_large_get", String(bst6.get("j")));
  emit("bst_large_contains", String(bst6.contains("n")));

  // --- Group 9: Mixed operations ---
  const bst7 = new BST();
  bst7.put("x", 100);
  bst7.put("y", 200);
  bst7.put("x", 300);
  bst7.put("z", 400);
  emit("bst_mixed_overwrite", String(bst7.get("x")));
  emit("bst_mixed_final_size", String(bst7.size()));
}

main();
