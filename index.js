// Your code here


function mapToNegativize(src) {
  let r = []

  for (let i = 0; i < src.length; i++ )
   {
    r.push(-1 * src[i])
  }

return r

}



function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  else return true
}
