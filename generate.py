""" Build index from directory listing

make_index.py </path/to/directory> [--header <header text>]
"""

INDEX_TEMPLATE = r"""
<html>
<body>
<h2>${header}</h2>
<p>
% for name in names:
    <li><a href="${name}">${name}</a></li>
% endfor
</p>
</body>
</html>
"""

EXCLUDED = ['index.html']

import os
import argparse

# May need to do "pip install mako"
from mako.template import Template


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("directory")
    parser.add_argument("--header")
    args = parser.parse_args()

    fnames = []
    for root, dirs, files in os.walk(args.directory):
        for file in files:
            if file.endswith('.html') and file not in EXCLUDED:
                relative_path = os.path.relpath(os.path.join(root, file), args.directory)
                fnames.append(relative_path)

    header = (args.header if args.header else os.path.basename(args.directory))
    rendered_html = Template(INDEX_TEMPLATE).render(names=fnames, header=header)
    
    output_path = os.path.join(args.directory, 'index.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(rendered_html)
    print(f"Index file generated at {output_path}")

if __name__ == '__main__':
    main()