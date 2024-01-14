import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import { useEffect } from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}
const CodeEditor = ({ value, onChange }: Props) => {
    const handleChange = (editor: any, data: any, value: string) => {

        // Call the onChange prop with the updated value
        onChange(value);

    };

    useEffect(() => {
        const codeMirrorElements = document.querySelectorAll('.CodeMirror');
        if (codeMirrorElements.length > 1) {
            codeMirrorElements[0].remove();
        }
    }, []);

    return (
        <>
            <CodeMirror

                onBeforeChange={handleChange}
                value={value}
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true,
                    

                }}
                onChange={(editor, data, value) => {

                }}
            />
        </>
    )
}

export default CodeEditor