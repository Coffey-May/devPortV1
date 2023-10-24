export default function getScrollAnimation4() {
	return ({
    offscreen: {
      y: -1800,
      opacity: 0,
    },
    onscreen: ({duration = 3} = {}) =>  ({
      y: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}
