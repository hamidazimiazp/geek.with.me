"""a1z26
    
    hamid => [12, 5, 17, 13, 8]
"""

def encode(plain):
    return [ord(item) - 92 for item in plain]


def decode(encoded):
    return "".join([chr(item + 92) for item in encoded])


print(encode("hamid"))
print(decode(encode("hamid")))