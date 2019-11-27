# Dylist

Dynamic List

# Requirments

- vuedraggable
- lodash.clonedeep

# Installation

- src/components.js
```js
/* ... */
import Dylist from './Dylist/components/Dylist.vue';
/* ... */
export default {
    /* ... */
     Dylist
    /* ... */
}
```

- src/sandbox.js
```js
export default {
    routes: [
    /* ... */
        {path: '/dylist', component: () => import('./Dylist/sandbox/DylistSandbox.vue')},
    /* ... */
    ]
}
```
