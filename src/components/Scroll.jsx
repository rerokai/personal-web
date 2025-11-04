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
        Сижу сейчас, попиваю мультиягодный смузи за 700 EUR , на улице стоит моя Bugatti Veyron Grand Sport за 1.7 млн $, 
        ах забыл, нахожусь я в городе Палермо , Италия в вилле за 30 000 000 евро, Скоро мой шеф повар приготовит Florentiniс pizza c золотой стружкой 
        за 1400 EUR и порцию элитных мандаришек с финиками за 300 EUR, но на нитро не хватило, подарите 

      </div>
      <div class="image-container" 
      onClick={() => window.open('https://github.com/rerokai', '_blank')}
          style={{ cursor: 'pointer' }}>
        <img src="https://i.ibb.co/qMhYzLvz/2b0d6f93bf20aa46baf24e05284f3d57.jpg" alt="Описание картинки" />
      </div> 
     </div>

      </section>
      <section className="panel panel_2">
        <div class="content-wrapper">
      <div class="text-content">
        Отец знакомого работает в ФСБ. Сегодня срочно вызвали на совещание. Вернулся поздно и ничего не объяснил. Сказал лишь собирать вещи и бежать
        в магазин за продуктами на две недели. 
        Сейчас едем куда-то далеко за город. Не знаю что происходит, но мне кажется началось... 
      </div>
      <div class="image-container">
        <img src="https://i.ibb.co/HD6rgDQM/93af890d41cf1673fc65443e706a7a6b.jpg" alt="Описание картинки" />
      </div> 
     </div>
      </section>
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
      </section>
    </div>
  );
};

export default Scroll;