export default function UrlDeal({url}) {
  const newUrlArray = url.split('?')
  const newUrlString = newUrlArray[1]
  const newUrl = newUrlArray[1].split('&')
  const paramsObj = {}
  
  newUrl.forEach(item => {
    const [key, value] = item.split('=')
    paramsObj[key] = value
  })

  return <div>
    UrlDeal
  </div>
}