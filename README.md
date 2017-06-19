# Yodata Actions

Generators for http://schema.org/Actions with a consistent and uniform JSON format.

## Getting Started

### Installing

```
npm i --save @yodata/actions
```

### Usage

```js
import {Action, TypedObject} from @yodata/actions

let bob =  TypedObject('Person','Bob')
let alice =  TypedObject('Person','Alice')
let book  = TypedObject('Book','The Little Prince')

// Bob gives the book to Alice
let action = Action('GiveAction').the(book).from(bob).to(alice)

console.log(action)
// =>
    {
        context: 'http://schema.org/',
        type: 'GiveAction',
        object: { context: 'http://schema.org/', type: 'Book' },
        sender: { context: 'http://schema.org/', type: 'Person' },
        recipient: { context: 'http://schema.org/', type: 'Person' }
    }

```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
