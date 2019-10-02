<?php 
//***************** Страница с завершением заказа ******************
session_start();
// формируем массив с товарами в заказе (если товар один - оставляйте только первый элемент массива)
$products_list = array(
    1 => array( 
            'product_id' => $_GET['product_id'],    //код товара (из каталога CRM)
            'count'      => '1'                      //количество товара 1
    )
);
$products = urlencode(serialize($products_list));
// параметры запроса
$data = array(
    'key'             => 'a7979e208c0274d3be77822d6398f97c', //Ваш секретный токен
    'order_id'        => number_format(round(microtime(true)*10),0,'.',''), //идентификатор (код) заказа (*автоматически*)
    'country'         => 'UA',                      // Географическое направление заказа
    'office'          => 'отдел',                   // Офис (id в CRM)
    'products'        => $products,                 // массив с товарами в заказе
    'bayer_name'      => $_GET['name'],             // покупатель (Ф.И.О)
    'phone'           => $_GET['phone'],           // телефон
    'email'           => $_GET['email'],           // электронка
    'comment'         => $_GET['product_name'],    // комментарий
    'site'            => $_SERVER['SERVER_NAME'],  // сайт отправляющий запрос
    'ip'              => $_SERVER['REMOTE_ADDR'],  // IP адрес покупателя
    'delivery'        => $_GET['delivery'],        // способ доставки (id в CRM)
    'delivery_adress' => $_GET['delivery_adress'], // адрес доставки
    'payment'         => 'способ оплаты',          // вариант оплаты (id в CRM)
    'utm_source'      => $_SESSION['utms']['utm_source'],  // utm_source 
    'utm_medium'      => $_SESSION['utms']['utm_medium'],  // utm_medium 
    'utm_term'        => $_SESSION['utms']['utm_term'],    // utm_term   
    'utm_content'     => $_SESSION['utms']['utm_content'], // utm_content    
    'utm_campaign'    => $_SESSION['utms']['utm_campaign'] // utm_campaign
);
 
// запрос
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'http://sewinglab.lp-crm.biz/api/addNewOrder.html');
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
$out = curl_exec($curl);
curl_close($curl);
//$out – ответ сервера в формате JSON
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/jquery.slick/1.5.0/slick-theme.css" />
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <style>
    body {
      background-color: #2F3C4F;
    }

    h1 {
      margin: 0;
    }

    .c-article {
      margin-top: 30px;
      text-align: center;
    }

    .c-article__header {
      position: relative;
    }

    .c-article__title {
      font-family: 'Scope One', sans-serif;
      font-size: 35px;
      color: #fc3735;
      background: -webkit-linear-gradient(left, #F57170, #10DDC2, #F57170);
      background-size: 1600px 200px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation-duration: 3s;
      animation-name: animationgradienttitle;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
    }

    .c-article__title span {
      font-size: 20px;
    }

    .u-font-lora {
      font-family: 'Lora', sans-serif;
      font-size: 1.5em;
      font-weight: 700;
    }

    .button-link {
      display: block;
      text-decoration: none;
      color: #fff;
      font-family: sans-serif;
      border: 1px solid #F57170;
      padding: 15px;
      width: 200px;
      margin: 20px auto;
      border-radius: 10px;
      background: #F57170;
      font-size: 18px;
    }

    @keyframes animationgradienttitle {
      0% {
        background-position: 0 1600px;
      }

      100% {
        background-position: 1600px 0;
      }
    }

    .item {
      margin-left: 10px;
      margin-right: 10px;
    }

    .item img {
      width: 100%;
    }
  </style>  


<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '434185300544298');
  fbq('track', 'PageView');
  fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=434185300544298&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
</head>
    
<body>
  <article class="c-article">
    <header class="c-article__header">
      <h1 class="c-article__title">
        Спасибо за Ваш заказ!
        <br>
        <span class="u-font-lora">Наш менеджер свяжется с вами в ближайшее время. Будьте на связи!</span>
      </h1>
      <a href="index.html" class="button-link">Вернуться на главную</a>
      <p>Так же вы можете заказать у нас следующие товары со скидкой</p>
    </header>
    <div class="center">
      <div class="item"><a href="http://toptovar1.net/led-mirror/" target="_blank"><img src="imge/1.png" alt=""></a></div>
	  <div class="item"><a href="http://toptovar1.net/revoflex/" target="_blank"><img src="imge/2.png" alt=""></a></div>
    </div>
    <div class="left-selector"></div>
    <div class="right-selector"></div>
  </article>
  <script>
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 700,
      arrows: true,
      responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  </script>
</body>

</html>