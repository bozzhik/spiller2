# The python script is used to get data using Google Sheets API and format it

import requests
import json

url = "https://script.googleusercontent.com/macros/echo?user_content_key=c6WklQpKaqkX6CpcKECPePcH2jGE-R8po4iwuZB_jJyt9Mei3lKCd-YDFqMr6tOgNDzQFR9GKqMDYRoeqXExIQE9SGOvFpvAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKVGZTHI_Nwxc5R_GMMIuVvd4M-QlgV3c755jirSdPP7XhD9pzQbvtbRvtpJS283DA1kEFBQe8SXJpuPbLSZyAQpTEda1UDEcA&lib=MsvCZFAvZ-7jT9ejadsDEN0cg7Il6qISr"
response = requests.get(url)
data = response.json()

prev_name = None
prev_description = None
prev_usage = None

# Iterate through objectData array and format the data
# If [name] is empty, replace it with the previous non-empty [name]
for obj in data["objectData"]:
    # Remove extra spaces from the "name" field
    obj["name"] = ' '.join(obj["name"].split())

    if not obj["name"]:
        obj["name"] = prev_name
    else:
        prev_name = obj["name"]

    if not obj["description"]:
        obj["description"] = prev_description
    else:
        prev_description = obj["description"]

    if not obj["usage"]:
        obj["usage"] = prev_usage
    else:
        prev_usage = obj["usage"]

formatted_data = data["objectData"]

output_json_file = "python/formatted_data.json"
with open(output_json_file, "w", encoding="utf-8") as json_file:
    json.dump(formatted_data, json_file, ensure_ascii=False, indent=4)

output_ndjson_file = "python/formatted_data.ndjson"
with open(output_ndjson_file, "w", encoding="utf-8") as ndjson_file:
    for item in formatted_data:
        ndjson_file.write(json.dumps(item, ensure_ascii=False) + '\n')

print("\033[31m" + "###")
print("\033[35m" + f"Formatted data has been written to {output_json_file}")
print("\033[31m" + "###")
