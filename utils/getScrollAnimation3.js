export default function getScrollAnimation3() {
	return ({
    offscreen: {
      y: 800,
      opacity: 0,
    },
    onscreen: ({duration = 1.5} = {}) =>  ({
      y: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}
