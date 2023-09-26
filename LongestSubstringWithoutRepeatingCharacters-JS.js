var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  const charIndexMap = new Map(); // To store the last index where each character appeared

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
      // If the character is already in the current substring, update the left pointer
      left = charIndexMap.get(char) + 1;
    }

    charIndexMap.set(char, right); // Update the last index of the character

    maxLength = Math.max(maxLength, right - left + 1); // Update the maximum length
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); //  1
console.log(lengthOfLongestSubstring("pwwkew")); //  3

// Space Complexity: O(min(n, m))
// Time Complexity: O(n)
