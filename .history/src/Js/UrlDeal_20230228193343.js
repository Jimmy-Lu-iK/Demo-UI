export default function UrlDeal({url}) {
  const newUrlArray = url.split('?')
  const newUrlString = newUrlArray[1]
  const newUrl = newUrlArray[1].split('&')

  return <div>
    UrlDeal
  </div>
}