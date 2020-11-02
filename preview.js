"strict mode"
const Preview = document.getElementById('preview')
const Create = React.createElement

const Markdown = () => {
    const [initial] = React.useState(
        `# This is H1 heading.
        \n## This is an h2 heading.        
        \nhttp://richkevan.com        
        \nThis is inline code <div></div>                
                <div>
                <p>This is a code block</p>
                </div>                  
        \n1. item 1 
        \n1. item 2 
        \n1. item 3
        \n* unordered item
        \n* second item
        \nPeter Drucker once said
        \n>"There is nothing so useless as doing efficiently that which should not be done at all."
        \n![Picture of Rich](\\imgs\\fistbump.png)
        \n**This is strong text**`
    )
    const [output, setOutput] = React.useState(initial)

    const handleChange = (event) => {
        setOutput(event.target.value)
    }

    return (
        <div id="flex">
            <textarea  onChange={handleChange} id="editor" value={output}></textarea>
            <div id="preview"><ReactMarkdown >{output}</ReactMarkdown></div>
        </div>
    )
}
ReactDOM.render(Create(Markdown),Preview)