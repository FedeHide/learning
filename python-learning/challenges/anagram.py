## anagram challenge
# write a function that takes two strings as arguments
# and returns True if they are anagrams of each other
# an anagram is a word or phrase formed by rearranging the letters of a
# different word or phrase.


def is_anagram(s1: str, s2: str) -> bool:
    s1 = s1.lower()
    s2 = s2.lower()

    if s1 == s2:
        return False

    return sorted(s1) == sorted(s2)


print(is_anagram("listen", "silent"))  # True
print(is_anagram("listen", "Silent"))  # True
print(is_anagram("hello", "world"))  # False
print(is_anagram("rail safety", "fairy tales"))  # True
