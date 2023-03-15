export default function UrlDeal({url}) {
  const newUrlArray = url.split('?')
  const newUrlString = newUrlArray[1]
  const newUrl = newUrlArray[1].split('&')
  const paramsObj = newUrl.map(item => {
    
  })

  return <div>
    UrlDeal
  </div>
}