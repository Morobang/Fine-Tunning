import os
import subprocess

CLIENTS_DIR = "clients"
DATA_SUBDIR = "data"  # Each client should have a 'data' folder
OUTPUT_SUBDIR = "output"  # Results will be saved here

for client in os.listdir(CLIENTS_DIR):
    client_path = os.path.join(CLIENTS_DIR, client)
    if os.path.isdir(client_path):
        data_path = os.path.join(client_path, DATA_SUBDIR)
        output_path = os.path.join(client_path, OUTPUT_SUBDIR)
        if os.path.exists(data_path):
            print(f"Running fine-tuning for {client}")
            subprocess.run([
                "python", "fine_tune.py",
                "--client", client,
                "--data", data_path,
                "--output", output_path
            ])
        else:
            print(f"No data found for {client}, skipping.")
