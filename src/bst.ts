/**
 * BST — 二叉搜索树（插入、查找、中序遍历）。
 *
 * key 为 string 类型，value 为 number 类型。
 * BST 性质：左子树所有 key < 当前 key < 右子树所有 key。
 */

class BSTNode {
  key: string;
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(key: string, val: number) {
    this.key = key;
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  private root: BSTNode | null;
  private _size: number;

  constructor() {
    this.root = null;
    this._size = 0;
  }

  /** 插入或更新键值对。 */
  put(key: string, val: number): void {
    throw new Error("TODO: S06");
  }

  /** 查找 key 对应的 value。不存在返回 -1。 */
  get(key: string): number {
    throw new Error("TODO: S06");
  }

  /** 判断 key 是否存在于树中。 */
  contains(key: string): boolean {
    throw new Error("TODO: S06");
  }

  /** 返回树中键值对的个数。 */
  size(): number {
    throw new Error("TODO: S06");
  }

  /** 中序遍历，返回按字典序排列的所有 key 数组。 */
  keys(): string[] {
    throw new Error("TODO: S06");
  }
}
