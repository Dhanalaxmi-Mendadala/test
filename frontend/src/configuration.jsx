const configuration = () => {
    return ({
        holder: 'editor',
        autofocus: 'true',
        tools: {
            header: {
                class: Header,
                inlineToolbar: true,
                config: { placeholder: 'Enter a title', }
            },
        }
    })
};
export default configuration;