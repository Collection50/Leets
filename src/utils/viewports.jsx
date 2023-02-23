import facepaint from 'facepaint';

const breakpoints = [820, 1180, 1440];
const mq = facepaint(breakpoints.map(breakpoint => `@media(min-width: ${breakpoint}px)`));
export default mq;
