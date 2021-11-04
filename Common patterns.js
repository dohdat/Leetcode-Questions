//Arrays////////////////////////////////////////////////////////////////
//convert array to string
let resStr = result.join("");

// Check if an array includes a certain value among its enties
str.includes(val);
// Returns the position of the value, or -1 if not found.
str.indexOf(val);
// Removes whitespace from beginning and end. Useful for input fields or data cleaning.
str.trim();
// returns the part of the string between the start and end indexes:
str.substring(startIndex, endIndex);
// Adds to end of an array.
arr.push(val);
// Removes last value of an array and returns it.
arr.pop();
// Copies an array.
arr.slice();
// Makes a copy of an array at some start index (inclusive) and end index (exclusive).
arr.slice(startIndex, endIndex);
// Removes the first item of the array and returns the array.
arr.shift();
// Adds a value as the first item of the array and returns the new length. shift and unshift are useful for Queues.
arr.unshift(val);
// Useful for reducing all the values in an array to a single value.
const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((total, amount) => total + amount); // 118.11

// Removing an Item from an Array
arr.splice(arr.indexOf(val), 1);

//array.sort() assumes sorting strings
arr.sort();
//array.sort((a,b)=>a-b) sort numbers correctly
arr.sort((a, b) => a - b);

//flatten array
arr.flat();

//Objects////////////////////////////////////////////////////////////////////////////////
// Returns an array with a list of the keys as strings.
Object.keys(obj);
// Returns an array with a list of the values as strings.
Object.values(obj);

//Sets////////////////////////////////////////////////////////////////
// They are basically unordered arrays, and cannot store duplicate values.
//Declare a new set
let set = new Set(array);
let set = new Set();

//remove duplicates from the array
uniq = [...new Set(array)];

//check the size of the Set
set.size;
//add val to the set
set.add(val);
//remove val from the set
set.delete(val);
//check if set has certain val
set.has(val);

//Leetcode common patterns to solve problems
// If input array is sorted then
//     - Binary search
let iterativeFunction = function (arr, x) {
    let start = 0,
        end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
        // Find the mid index
        let mid = Math.floor((start + end) / 2);

        // If element is present at mid, return True
        if (arr[mid] === x) return true;
        // Else look in left or right half accordingly
        else if (arr[mid] < x) start = mid + 1;
        else end = mid - 1;
    }

    return false;
};

//     - Two pointers/ Window Sliding Technique
const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const k = 11;

function findPairs(array, k) {
    let start = 0;
    let end = array.length - 1;
    let occurances = [];

    while (start < end) {
        if (array[start] + array[end] === k) {
            occurances.push([start, end]);
            start++;
            end--;
        } else if (array[start] + array[end] < k) {
            start++;
        } else {
            end--;
        }
    }
    return occurances;
}
//Two pointers/Sliding Window to find the max occurances of chars in a string
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
var maxPower = function (s) {
    let power = 1;

    let start = 0;
    for (let end = 1; end < s.length; end++) {
        if (s[start] !== s[end]) {
            start = end;
        }

        power = Math.max(power, end - start + 1);
    }

    return power;
};
// If asked for all permutations/subsets then
//     - Backtracking

//Example: find all possible permutations
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
var permute = function (nums) {
    let res = [];
    dfs(nums, new Set(), res);
    return res;
};
function dfs(nums, curr, res) {
    if (curr.size == nums.length) {
        res.push(Array.from(curr));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (curr.has(nums[i])) continue;
        curr.add(nums[i]);
        dfs(nums, curr, res);
        curr.delete(nums[i]);
    }
}

// If given a tree || graph then
//     - DFS
function traverseDFS(root) {
    let stack = [root];
    let res = [];

    while (stack.length) {
        let curr = stack.pop();
        res.push(curr.key);

        if (curr.right) {
            stack.push(curr.right);
        }

        if (curr.left) {
            stack.push(curr.left);
        }
    }

    return res.reverse();
}
//     - BFS
function traverseBFS(root) {
    let queue = [root];
    let res = [];

    while (queue.length) {
        let curr = queue.shift();
        res.push(curr.key);

        if (curr.right) {
            queue.push(curr.right);
        }

        if (curr.left) {
            queue.push(curr.left);
        }
    }

    return res;
}

// If recursion is banned then
//     - Stack
//how to reverse a string using a stack
function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = "";
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}

// If must solve in-place then
//     - Swap corresponding values
//     - Store one or more different values in the same pointer

// If asked for maximum/minumum subarray/subset/options then
//     - Dynamic programming

// If asked for top/least K items then
//     - Heap

// If asked for common strings then
//     - Map
//     - Trie

// Else
//     - Map/Set for O(1) time & O(n) space
//     - Sort input for O(nlogn) time and O(1) space

//How to reverse linkedlist
// O(n) time & O(1) space
function reverse(head) {
    let node = head,
        previous,
        tmp;

    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;

        // reverse pointer
        node.next = previous;

        // step forward in the list
        previous = node;
        node = tmp;
    }

    return previous;
}

//Kadane's algo to find max subarray
function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    return maxGlobal;
}

//Create hashmap
let hashMap = {};
let arr = s.split(""); //Convert string to array
arr.forEach((c) => (hashMap[c] = (hashMap[c] || 0) + 1));

//Sort hashmap
var keys = Object.keys(hashMap);
keys.sort((a, b) => {
    return hashMap[b] - hashMap[a];
});
//Sorted hashmap
var topKFrequent = function (nums, k) {
    let res = [],
        map = new Map();

    nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }

    return res;
};
//check if hashmap contains keys
hashMap["key"] !== undefined;

//Invert Binary Tree
// DFS
function invertTree(root) {
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }

    return root;
}

// BFS
function invertTree(root) {
    const queue = [root];

    while (queue.length) {
        const n = queue.shift();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            queue.push(n.left, n.right);
        }
    }

    return root;
}
//use Set to check if array is already in result to remove duplicates
let res = [],
    memo = new Set();
let temp = nums[i] + nums[start] + nums[end];
let tempRes = [nums[i], nums[start], nums[end]].toString();
if (!memo.has(tempRes)) {
    memo.add(tempRes);
    res.push([nums[i], nums[start], nums[end]]);
}
//sorting in place: bubble sort
// Because it sorts in place, no additional storage is required
var bubbleSort = function (nums) {
    //using bubble sort to sort in place
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length - i - 1; j++) {
            //checking if the item at the present iteration is greater than the next iteration
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
};
// The DFS strategy prioritizes depth over breadth.
// These strategies tell us, with DFS, we usually process one single node at each step,
// while in BFS, we could process multiple clusters of nodes.
const array = ["a", "b", "c"];
for (let cur in array) {
} // loop through the index 1,2,3
for (let cur of array) {
} // loop through the element a,b,c

//how to sort intervals
intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
intervals.sort((a, b) => a[0] - b[0]);
//how to merge intervals
let prev = intervals[0];
let res = [prev];
//loop through the intervals
for (let cur of intervals) {
    ///
}

//how to traverse tree

//Inorder traversal (Left -Root- Right)
function inOrder(root) {
    root.left && inOrder(root.left);
    console.log(root.val);
    root.right && inOrder(root.right);
}

//Preorder traversal(Root - Left - Right)
function preOrder(root) {
    console.log(root.val);
    root.left && preOrder(root.left);
    root.right && preOrder(root.right);
}
//Postorder traversal(Left - Right - Root)

function postOrder(root) {
    root.left && postOrder(root.left);
    root.right && postOrder(root.right);
    console.log(root.val);
}
//how to find the sum of all left leaves
var sumOfLeftLeaves = function (root) {
    return preOrder(root, false);
};

function preOrder(root, isLeft) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null && isLeft) {
        return root.val;
    }
    const left = root.left && preOrder(root.left, true);
    const right = root.right && preOrder(root.right, false);
    return left + right;
}
