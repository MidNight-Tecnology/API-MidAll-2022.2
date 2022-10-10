import os
import glob

pdf_files = glob.glob('*.pdf')

for pdf_file in pdf_files:
    os.remove(pdf_file)

# esse código muda o arquivo de diretório
# file_source = 'Path/Of/Directory'
# file_destination = 'Path/Of/Directory'
# get_files = os.listdir(file_source)
