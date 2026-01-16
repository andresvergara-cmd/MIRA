import sys
from pdfminer.high_level import extract_text

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 extract.py input.pdf output.txt")
        sys.exit(1)
    
    input_pdf = sys.argv[1]
    output_txt = sys.argv[2]
    
    try:
        text = extract_text(input_pdf)
        with open(output_txt, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully extracted text from {input_pdf} to {output_txt}")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
