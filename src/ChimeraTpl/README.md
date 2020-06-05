# ChimeraTpl

Basic counter

# Dependencies

- none

# Installation

- src/components.js
```js
/* ... */
export { default as ChimeraTpl } from "./ChimeraTpl/components/ChimeraTpl";
/* ... */
```

- src/sandbox.js
```js
export default {
    routes: [
    /* ... */
        {path: '/ChimeraTpl', component: () => import('./ChimeraTpl/sandbox/ChimeraTplSandbox.vue')},
    /* ... */
    ]
}
```
