#  Working example to create a backend using Express, TypeScript and Nodemon

**Nodemon** is a utility, that will monitor for any changes in your source and automatically restart your server. So while using it with *typescript* which itself requires *transpiling* to generate JavaScript file, so we can not use chaining to using a single command to watch both *transpiling* changes and *nodemon* server restart.

```javascript
> tsc --watch //This will transpile after change in .ts file
> npx nodemon server.js  // This will restart the server when js server.js changes
```


Thus to work with Typescript on our backend (and get the benefits of *type-checking*) we need to provide typescript support to *nodemon*, which is available for all nodemon version since v1.19.0 .

# Packages Required

Following are the packages that you need to install to package.json.
- typescript
	- For using `tsc` _transpiler_.
- express
	- For creating server
- nodemon
	- For watching server files for changes and restarting server
- ts-node
	- (New) For supporting ts file watching in nodemon
- @types/express and @types/node
	- For getting useful types which we can use to write more type-strict code.

If you are using **Yarn**, use following commands:
```javascript
> yarn add typescript -g //Installed globally
> yarn add express nodemon ts-node @types/express @types/node --save-dev //As dev-dependencies
```

--------

# Steps
- Once the above packages are installed you can create a `typescript-configuration` file by using following command
```
> npx tsc --init
        or
> tsc --init //If typescript is installed globaly
```

- Next we configure our newly created `tsconfig.json` file for our requirements.
- Add following lines to `compilerOptions`, or uncomment the already commented options.
	```javascript
	"rootDir": "./src",// For our input resources target
	"outDir": "./dist", // For typescript transpiling output
	```
Next Create a folder **src** in project root directory and create **`server.ts`** in the src folder:

Add following code fragment to the file `server.ts`
```typescript
import  express, {Application, Request, Response} from  'express';

var  app: Application = express();
const  port: 3000 | 5000 = 3000;

app.get('/', (req: Request, res: Response):void  => {
	res.send({msg:"Hello This is a sample response message"})
})

app.listen(port, ():void  => {
	console.log(`Example app listening on port ${port}`)
})
```

Now to allow nodemon to watch our typescript file for any changes and restart server that way we will create a nodemon-configuration file.
```
> touch ./nodemon.json
```

Open nodemon.json and add following code to it.
```javascript
{
	"watch": ["src/**/*.ts"], //This is target folder that need to be watched
	"ext": "ts,json", //File extensions to watch
	"ignore": ["src/**/*.spec.ts"], // Ignore files matching this pattern
	//execMap object is used to map file extensions with the script required for executing said script
	"execMap": {
		"ts": "ts-node" //ts-node will be used to execute ts files
	}
}
```

Now at last we will add following scripts to our package.json files for dev mode, build and start our backend server.
``` javascript
"scripts": {
	"start": "node ./dist/server.js", //Start our transpiled file
	"build": "tsc -p .", //Transpile ts file and generate js code for consumption
	"dev": "nodemon" //We only need to give this command as the configuration values will be taken from nodemon.json file
},
```

Development mode Script
```javascript
➜  yarn dev
yarn run v1.22.19
$ nodemon
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*.ts
[nodemon] watching extensions: ts,json
[nodemon] starting `node ./dist/server.js`
Example app listening on port 3000
```
Build and create `server.js` file for

```javascript
➜  yarn build
yarn run v1.22.19
$ tsc -p .
✨  Done in 1.07s.
```

Start node server to accept api calls

```javascript
➜  yarn start
yarn run v1.22.19
$ node ./dist/server.js
Example app listening on port 3000
```
