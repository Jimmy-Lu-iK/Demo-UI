import React, { useEffect } from 'react';

const HtmlResponsiveDesignRem = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang=""en>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=0">
        <title>Document</title>
        <script>
          const change = () => {
            //let width = document.documentElement.clientWidth;
            let width = window.innerWidth;
            let rootFontSize = (20*(width/320)>40 ? 40 + "px" :  20*(width/320) + 'px');
            document.documentElement.style.fontSize = rootFontSize
          }
          window.addEventListener("load", change)
          window.addEventListener("resize", change)
        </script>
        <style>
          * {
            margin: 0;
            padding: 0;
          }
    
          html {
            font-size: 10px;
          }
    
          #top, #main, #bottom {
            width: 100%;
          }
    
          #top {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 2rem;
            z-index: 1000;
            background-color: #f5f5f5;
          }
    
          #logo {
            width: 2rem;
            height: 2rem;
            vertical-align: -webkit-baseline-middle;
          }
    
          #main {
            height: auto;
            position: absolute;
            top: 2rem;
            border: 2rem;
            background-color: #f5f5f5;
          }
    
          #main ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 0.5rem;
          }
    
          #main ul li {
            flex: 2 2 3rem;
            display: flex;
            border-bottom: 1px solid #dcdcdc;
            align-items: center;
            justify-content: space-between;
          }
    
          #main ul li div{
            margin-left: 0.2rem;
            margin-right: 0.5rem;
          }
    
          .logo {
            width: 4rem;
            height: 3rem;
            vertical-align: -webkit-baseline-middle;
          }
    
          .shopCar {
            width: 1rem;
            height: 1rem;
            vertical-align: -webkit-baseline-middle;
          }
    
          #bottom {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2rem;
            z-index: 1000;
            background-color: #f5f5f5;
            display: flex;
          }
    
          #bottom div {
            flex:1 1 auto;
            text-align: center;
          }
    
          #bottom div img {
            height: 2rem;
            width: 2rem;
            vertical-align: -webkit-baseline-middle;
          }
        </style>
      </head>
      <body>
        <div id="div0">
          <div id="top">
            <img id="logo" src="https://img.icons8.com/color/96/null/man_reading_a_book.png">
          </div>
          <div id="main">
            <ul>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
              <li>
                <div><img src="https://img.icons8.com/color-glass/48/null/studying.png" class="logo"></div>
                <div>慕课精品成长课，培养更高思维+技术能力的综合性高端前端人才</div>
                <div><img src="https://img.icons8.com/neon/96/null/shopping-cart.png" class="shopCar"></div>
              </li>
            </ul>
          </div>
          <div id="bottom">
            <div><img src="https://img.icons8.com/neon/96/null/confetti.png"></div>
            <div><img src="https://img.icons8.com/neon/96/null/city.png"></div>
          </div>
        </div>
      </body>
    </html>
  `;

  useEffect(() => {
    const iframe = document.getElementById('html-iframe');
    if (iframe) {
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(htmlContent);
      iframe.contentWindow.document.close();
    }
  }, []);

  return <iframe id="html-iframe" style={{ width: '100%', height: '100vh', border: 'none' }} />;
};

export default HtmlResponsiveDesignRem;