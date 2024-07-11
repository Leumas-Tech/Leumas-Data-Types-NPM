class Markdown {
    constructor(markdownText) {
        this.markdownText = markdownText;
    }

    toHTML() {
        const rules = [
            { regex: /###### (.*$)/gim, replace: '<h6>$1</h6>' },
            { regex: /##### (.*$)/gim, replace: '<h5>$1</h5>' },
            { regex: /#### (.*$)/gim, replace: '<h4>$1</h4>' },
            { regex: /### (.*$)/gim, replace: '<h3>$1</h3>' },
            { regex: /## (.*$)/gim, replace: '<h2>$1</h2>' },
            { regex: /# (.*$)/gim, replace: '<h1>$1</h1>' },
            { regex: /\*\*(.*)\*\*/gim, replace: '<b>$1</b>' },
            { regex: /\*(.*)\*/gim, replace: '<i>$1</i>' },
            { regex: /\n$/gim, replace: '<br>' }
        ];

        return rules.reduce((acc, rule) => acc.replace(rule.regex, rule.replace), this.markdownText);
    }
}
export default Markdown
// Usage
// const markdown = new Markdown('# Hello World\nThis is **bold** text and *italic* text.');
// console.log(markdown.toHTML()); // <h1>Hello World</h1><br>This is <b>bold</b> text and <i>italic</i> text.<br>
