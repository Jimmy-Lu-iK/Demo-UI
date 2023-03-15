export default function UrlDeal({url}) {
  const newUrl = url.split('?')[1].split('&')
  const paramsObj = {}

  newUrl.forEach(item => {
    const [key, value] = item.split('=')
    paramsObj[key] = value
  })

  console.log('UrlDeal: ',paramsObj)

  return <div>
    UrlDeal
  </div>
}