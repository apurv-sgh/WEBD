## How to setup Tailwind CSS using CLI

Step 0: 
```
npm init --y
```

Step 1: Run the following commands

``` 
npm install -D tailwindcss @tailwindcss/cli

npx tailwindcss-cli init

```

Step 2: Update tailwind.conf.js file to include this line:
```
content: ["*.html"],
```

Step 3: create src/input.css to include:
```
@import "tailwindcss";
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```


## How to setup Tailwind CSS using CLI

Step 1:
```
https://tailwindcss.com/docs/installation/using-vite
```