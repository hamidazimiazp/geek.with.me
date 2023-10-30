import requests


response = requests.get("https://httpbin.org/ip")

print(response.json()["origin"])