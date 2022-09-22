"""rotate

    rotate("hello", 2) => "llohe"
    rotate("hello", 5) => "hello"
    rotate("hello", 6) => "olleh"
    rotate("hello", 7) => "llohe"

"""


def rotate(string, c):
    double_str = string * c #hellohello
    
    if c <= len(string):
        return double_str[c: c + len(string)]
    else:
        return double_str[c - len(string):c]
    

print(rotate("hello", 2))
print(rotate("hello", 5))
print(rotate("hello", 6))
print(rotate("hello", 8))