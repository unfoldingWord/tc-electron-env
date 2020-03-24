# tc-electron-env

Logic for accessing electron environment variables

## Usage

- Installing `tc-electron-env`.

    ```bash
    npm i -S tc-electron-env
    ```

- Write the following code in your applications source file:

    ```js
    import env from 'tc-electron-env';

    const homePath = env.home();
    ```

## Testing your changes

- Create your feature/bugfix/enhancement (my-feature-branch) branch off of master.
- Make your changes in the new branch (my-feature-branch).
- Push your changes.
- Run `npm i unfoldingWord/tc-electron-env#my-feature-branch` in your application root directory.
- For subsequent changes run `rm -rf node_modules/tc-electron-env; npm i tc-electron-env;`
