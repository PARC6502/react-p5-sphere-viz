# p5+React Sphere Visualiser

![p5-react-sphere-screenshot](https://user-images.githubusercontent.com/3056543/54948554-ce53c180-4f34-11e9-8edb-2cb4083cd0e0.PNG)

[Live demo here](https://p5-react-sphere.netlify.com/)

This a demonstration of mixing [p5.js](https://github.com/processing/p5.js) and [React](https://github.com/facebook/react) together. It's built on top of my [previous simpler project](https://github.com/PARC6502/basic-p5-react). The p5 sketch is controlled by a react components and recieves "props" from it. Some cool stuff in this project:

- No classes: all the react components use hooks
  - Uses the `useRef()` hook to have something like an instance variable that is only updated if specific pieces of state are updated
  - Uses the `useEffect()` hook for side effects in functional components
- The React component controls the animation of the p5.js sketch, so the animation state is preserved even when the sketch is unmounted and remounted
- Uses [styled-components](https://github.com/styled-components/styled-components) a great library that allows me style components from inside .jsx files using actual css code
- Use `React.lazy` and `Suspense` to lazy load components.
