export default function getScrollAnimation4() {
	return ({
    offscreen: {
      z: -1000,
      opacity: 0,
    },
    onscreen: ({duration = 3} = {}) =>  ({
      z: 1000,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}
