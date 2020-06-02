import os

directory = 'E:/Work/cohort4/python/comp_200'

# List comprehension for rifling through files.

files = [file for file in os.listdir(directory) if os.path.isfile(os.path.join(directory, file))]
sizes = [os.stat(os.path.join(directory, file)).st_size for file in os.listdir(directory) if os.path.isfile(os.path.join(directory, file))]


print(f'The number of files in {directory}:')
print(f'Ttl Files: {len(files)}')
print(f'Ttl Size: {sum(sizes)} bytes')