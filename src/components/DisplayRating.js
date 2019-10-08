const DisplayRating = ({ level }) => {
  switch (level) {
    case 1:
      return "⭐"
    case 2:
      return "⭐⭐"
    case 3:
      return "⭐⭐⭐"
    default:
      return "?"
  }
}

export default DisplayRating
