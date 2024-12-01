# import requests

# api_url = 'https://api.api-ninjas.com/v1/imagetotext'
# image_file_descriptor = open('sunset.jpg', 'rb')
# files = {'image': image_file_descriptor}
# r = requests.post(api_url, files=files)
# print(r.json())


import requests

api_url = 'https://api.api-ninjas.com/v1/imagetotext'
image_file_descriptor = open('sunset.jpg', 'rb')
files = {'image': image_file_descriptor}
headers = {'x-api-key': 'YOUR_API_KEY'}  # Replace 'YOUR_API_KEY' with your actual API key
r = requests.post(api_url, files=files, headers=headers)
print(r.json())
