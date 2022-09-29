const str = `
010-1234-5678
lmh5199@naver.com
https://www.omdbapi.com/?apikey=a3c42fa&s=frozen
The quick brown fox jumps over the lazy dog.
the shop
abbcccdddd
`

console.log(
  str.match(/(?<=\@).{1,}/g)
)