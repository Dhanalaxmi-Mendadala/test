class SimpleEmbed {
    constructor({ data }) {
      this.data = data || {};
    }
    static get toolbox() {
       return { 
        title: 'Embed', 
        icon: 'E',
       }; }
  
    render() {
      const wrapper = document.createElement('div');
      const input = document.createElement('input');
      
      input.placeholder = 'Paste your embed link here';
      input.value = this.data.source || ''; 
      wrapper.appendChild(input);
      
      this.input = input; 
      return wrapper;
    }
  
    save() {
      return {
        source: this.input.value, 
      };
    }
  }
  export default SimpleEmbed;