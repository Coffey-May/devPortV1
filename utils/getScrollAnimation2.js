export default function getScrollAnimation2() {
	return ({
    offscreen: {
      x: -2000,
      y: 200,
      opacity: 0,
    },
    onscreen: ({duration = 1.5} = {}) =>  ({
      x: 0,
      y:0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}
