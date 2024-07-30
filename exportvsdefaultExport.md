# Export and Import Methods in JavaScript

### 1. **Named Exports**

- **`export { routeNames, routesList };`**
  - **Purpose**: Exports multiple named entities from a module.
  - **Details**: You must import them using their exact names.
  - **Example**:
    ```javascript
    // In routesConfig.js
    export const routeNames = { ... };
    export const routesList = [ ... ];

    // In another file
    import { routeNames, routesList } from './routesConfig';
    ```

### 2. **Named Export with Object**

- **`export { routesComponentMap };`**
  - **Purpose**: Exports a named object or entity from a module.
  - **Details**: You must import it using the same name.
  - **Example**:
    ```javascript
    // In routesConfig.js
    export const routesComponentMap = { ... };

    // In another file
    import { routesComponentMap } from './routesConfig';
    ```

### 3. **Default Export**

- **`export default routesComponentMap;`**
  - **Purpose**: Exports a single default entity from a module.
  - **Details**: You can import it with any name you choose.
  - **Example**:
    ```javascript
    // In routesConfig.js
    const routesComponentMap = { ... };
    export default routesComponentMap;

    // In another file
    import routesComponentMap from './routesConfig';
    ```

By understanding these export methods, you can better manage how modules are shared and imported across different parts of your application.
