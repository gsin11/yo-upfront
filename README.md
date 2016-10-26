## Getting Started

This is a generator for tht upFront framework. To use this generator you must have yeoman installed.

```bash
npm install -g yo
```

### upFront Generator

This generator will allow you to quickly build pages and components using upFront.

To install generator-upfront from npm, run:

Please rplace `yourUsername` with your username and `#latest` with the version you want

```bash
npm install -g https://github.com/gsin11/yo-upfront-generator.git
```

Finally, initiate the generator:

```bash
yo upfront:page "The name of the page"
```

```bash
yo upfront:component "The name of the component"
yo upfront:component_org "The name of the component"  // This will add container class to first DOM element under your wrapper element.
```

```bash
yo upfront:core "The name of the core module"   // Command will automatically add "sn." as prefix to your given core module name.
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
