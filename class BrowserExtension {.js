class BrowserExtension {
  getInfo() {
    return {
      id: 'browserExtension',
      name: 'Browser Extension',
      blocks: [
        {
          opcode: 'openBrowserTab',
          blockType: 'command',
          text: 'open URL [URL]',
          arguments: {
            URL: {
              type: 'string',
              defaultValue: 'https://example.com'
            }
          }
        }
      ]
    };
  }

  openBrowserTab({ URL }) {
    window.open(URL, '_blank');
  }
}

Scratch.extensions.register(new BrowserExtension());
