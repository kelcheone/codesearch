import os
import re


class Search():
    def __init__(self, dir):
        self.dir = dir
    
    def target_files(self, file_extensions):
        # receives a list of file extensions ie: ['.txt', '.py'] and returns a list of files with those extensions
        file_list = []
        exts = []
        for root, dirs, files in os.walk(self.dir):
            for file in files:
                # print(os.path.splitext(file)[1])
                if os.path.splitext(file)[1] in file_extensions:
                    file_list.append(os.path.join(root, file))
                    exts.append(os.path.splitext(file)[1])
                    
        print(f'Found {len(file_list)} files with the following extensions: {set(exts)}')
        return file_list
    
    def search (self,target_files, search_strings):
        result = []
        search_string = search_strings[0]
        print(search_string)
        for file in target_files:
            with open(file, 'r') as f:
                for line_number, line in enumerate(f):
                    for string in search_strings:
                        if string in line:
                            result.append(f'{file} line {line_number}: {line} {string} found')
                            break
        for result in result:
            print(result)
        return result


test = Search("./test_dir/")
test.search(
test.target_files([".js", ".ts", ".txt", ".py", ".rb", ".java"]), [
    "address: market.address","name: market.name","logger.setLogLevel"
]    
    
)









