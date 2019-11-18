# Dylist

Dynamic List

# Requirments

- vuedraggable
- lodash.clonedeep

# Installation

- src/components.js
```js
export default {
    /* ... */
    Dylist: () => import('./modules/Dylist/components/Dylist.vue'),
    /* ... */
}
```

- src/sandbox.js
```js
export default {
    routes: [
    /* ... */
        {path: '/dylist', component: () => import('./modules/Dylist/sandbox/DylistSandbox.vue')},
    /* ... */
    ]
}
```

