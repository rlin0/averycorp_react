// export const S3Url = "https://averycorp.s3.amazonaws.com"
export const S3Url = "https://d1hd7g5p36nsjb.cloudfront.net"
export const masterPW = "kekXD"

export function getBit(num, k) {
  return (num & (1 << (k - 1))) > 0
}

export function setBit(num, k) {
  return num | (1 << (k - 1))
}

export function countSetBits(num) {
  var i = 0
  while (num) {
    i += num & 1
    num >>= 1
  }
  return i
}
