import random

#Code1
def function1(n=10, min_value=0, max_value=100):
    random_numbers = [random.randint(min_value, max_value) for _ in range(n)]
    return random_numbers

random_numbers = function1()
print(random_numbers)


#Code2
def function2(num_words=3):
    word_list = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]
    num_words = min(num_words, len(word_list))

    random_words = []

    while len(random_words) < num_words:
        random_index = random.randint(0, len(word_list) - 1)
        random_word = word_list[random_index]
        if random_word not in random_words:
            random_words.append(random_word)

    return random_words
random_words = function2(num_words=3)
for word in random_words:
    print(word)


#Code3
def function3(word):
    letter_count = {let}
    for letter in word
        if letter.isalpha():
            letter = letter.lower()
            if letter in letter_count:
                letter_count[letter] += 1
            else:
                letter_count[letter] = 1
    for letter, count in letter_count.items():
        print(f{letter}: {count}")

user_word = input("Enter a word: ")
function3(user_word)


#Code4
def count_characters_in_string(input_string):
    character_count = len(input_string)
    return character_count

input_string = "Hello, World!"
result = count_characters_in_string(input_string)
print(f"The string '{input_string}' contains {result} characters.")

#Code5
def multSum(x,y):




