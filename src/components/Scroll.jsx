import React, { useRef, useEffect } from "react";
import "../styles/scroll.css";
import "./../styles/adaptive.css";

const Scroll = () => {
  const scrollRef = useRef(null);
  

  useEffect(() => {
    const el = scrollRef.current;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      const speed = Math.abs(e.deltaY);
      const sensitivity =
        speed > 50 ? 3.5 : speed > 40 ? 2.2 : speed > 10 ? 1.4 : 1;

      el.scrollTo({
        left: el.scrollLeft + e.deltaY * sensitivity,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="horizontal-scroll" ref={scrollRef}>
      <section className="panel panel_1">
        <div class="content-wrapper">
      <div class="text-content">
        Изначально этот смешной сайтик писался для того чтоб потыкать React-Flow (перед другим большим проектом) и понять че это ваще за зверь и как с ним бороться...
        Спойлер, нет ни одного русского руководства или видоса, но официальная документация очень удобная, с визуальными примерами и подробным описанием всех возможностей. <br></br>
        <br></br>По итогам кропотливого изучения документации с гугл переводчиком, я осталась довольна, все легче чем могло бы быть. <br></br>Только с мобилкой проблемы, так как библиотека изначально заточена под десктопный UX. Видимо придется забить или  говнокодить  костыли.

        <br></br> <br></br> <br></br>интересный факт, на странице на которой вы сейчас находитесь можно скроллить...

      </div>
      <div class="image-container" 
      onClick={() => window.open('https://github.com/rerokai', '_blank')}
          style={{ cursor: 'pointer' }}>
        <img src="https://i.ibb.co/1GTgXdft/image-2025-11-11-15-52-34.png" alt="я понятия не имею почему это дерьмище не прогрузилось" />
      </div> 
     </div>

      </section>
       <section className="panel panel_2">
        <div class="content-wrapper">
      <div class="text-content">
        ну да, тут пока пусто
      </div>
      <div class="image-container">
        <img src="https://i.ibb.co/wrWvBYDx/alice.jpg" alt="я понятия не имею почему это дерьмище не прогрузилось" />
      </div> 
     </div>
      </section>
      {/*
      <section className="panel panel_3">
      <div class="content-wrapper">
        <div class="text-content">
        Слушай, в принципе, ты играешь неплохо, тебе только нужно немножко поработать над скилл билдами,
         итем билдами, пиками, контрпиками и банами, коллами в игре, чтением карты, контролем вардов и рун, попаданием скиллами,
          добиванием крипов, лайнингом, контролем Рошана, отводами крипов и фармов стаков, пулом героев, выбором общей стратегии и тактики.
           А так ты молодец, продолжай!Слушай, в принципе, ты играешь неплохо, тебе только нужно немножко поработать над скилл билдами,
         итем билдами, пиками, контрпиками и банами, коллами в игре, чтением карты, контролем вардов и рун, попаданием скиллами,
          добиванием крипов, лайнингом, контролем Рошана, отводами крипов и фармов стаков, пулом героев, выбором общей стратегии и тактики.
           А так ты молодец, продолжай!
      </div>
      <div class="image-container">
        <img src="https://i.ibb.co/twgfYz4q/78f78713f1ad95920e35ea6cb6184cca.jpg" alt="Описание картинки" />
      </div> 
     </div>
      </section> */}
    </div>
  );
};

export default Scroll;