export const leetCodeQuestions = [
    { 
        link: "https://leetcode.com/problems/product-of-array-except-self/description/",
        questionName:"Product of Array Except Self",
        defaultCodeValue:`/**
* @param {number[]} nums
* @return {number[]}
*/
function productExceptSelf(nums) {

};`,
        description: `
            Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
        `, 
        testCases: [
            {input: [1,2,3,4], expected: [24,12,8,6], type:"array" },
            { input: [-1,1,0,-3,3], expected: [0,0,9,0,0], type:"array" }
        ],
        difficulty: 'medium',
        tags:[]
    },
    {
        link: "https://leetcode.com/problems/contains-duplicate/description/",
        questionName: "Contains Duplicate",
        defaultCodeValue:`/**
* @param {number[]} nums
* @return {boolean}
*/
function containsDuplicate(nums) {
    
};`,
        description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109`,
        testCases: [
            {input: [1,1,1,3,3,4,3,2,4,2], expected: true, type:"array"},
            {input: [1,2,3,4], expected: false, type:"array"},],
        difficulty: 'easy',
        tags:[]
    },
    {
        link: "https://leetcode.com/problems/valid-anagram/description/",
        questionName: "Valid Anagram",
        defaultCodeValue:`/**
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    
};`,
        description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.`,
        testCases: [
            {input: ["anagram", "nagaram"], expected: true, type:"spread"},
            {input: ["rat","car"], expected: false, type:"spread"},],
        difficulty: 'easy',
        tags:[]
    }
    
  ];
  