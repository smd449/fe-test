
## Run Locally


```bash
  pnpm i
```

Start the server

```bash
  pnpm run dev
```

I initially used TanStack Query for fetching and Zustand for state management, and it was great—cleaner and more efficient since I didn’t have to drill props. However, after rereading the instructions, I realized I was required to use only useState and useEffect, so I scrapped the first version and built a new one using those hooks. While I sometimes use AI autocomplete in my previous regular work, **I made sure to turn it off for this assessment to showcase my raw React.js knowledge and to benchmark myself for my own sanity :)**

## Optimizations


Debounce – I debounced the search textarea to prevent re-renders on every keystroke.

useMemo – I used useMemo for all derived state like filteredData to avoid unnecessary recalculations.

useCallback – I wrapped all functions passed to child components with useCallback to prevent them from being recreated on every render, which also avoids triggering re-renders in memoized components.

React.memo – I wrapped performance-heavy components (like ListContainer and CardsContainer) with React.memo, and used custom comparison functions to ensure they only re-render when their array props actually change.

Lazy Load – I lazy-loaded as many components as possible to reduce the size of the main index.js bundle.

Dynamic Import – I used dynamic imports for lazy-loaded components so the browser only requests those chunks when needed.

Minimal useEffect Usage – I used useEffect only once, keeping side effects clean and minimal.

UseReducer - I used UseReducer instead of creating multiple useStates
## Questions


- Question 1: How would you manage state in a large-scale React app?
Answer:
In a large-scale React app, especially when working with a big team, I’d use a state management library like Redux. It helps keep the state predictable, centralized, and easier to debug, while enforcing a clear and consistent convention across the team.

- Question 2: How would you optimize performance in React using useEffect, useMemo, and useCallback?
Answer:
With useEffect, make sure to include the correct dependencies in the array and always clean up any event listeners, timers, or subscriptions in the return function. Avoid overusing it for logic that doesn’t involve side effects.

useMemo is helpful for memoizing expensive derived state to avoid unnecessary recalculations.

useCallback is useful for memoizing functions especially those passed as props to memoized child components to avoid triggering unnecessary re-renders.

That said, these tools should only be used when necessary. Overusing them can lead to more complexity than performance gain.

- Question 3: How would you ensure accessibility in the User Directory component?
Answer:
I’d use clear, semantic HTML to structure the content properly. I'd also add meaningful labels and ARIA attributes where needed for example, using the <button> element for buttons instead of divs or spans, and ensuring that all interactive elements are focusable and screen reader-friendly.
