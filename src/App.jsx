import Header from "./components/Header/Header.jsx";
import { Button, Image } from 'antd';
import {useState} from "react";
import ModalWindow from "./components/Modal/ModalWindow.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  return (
    <>
        <Header/>
        <p>
            Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
        </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p>
        <section className="container block-1">
            <div className="content">
                <h2>
                    Защитите свою собственность
                </h2>
                <p>
                    Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
                </p>
                <Button type="primary" onClick={showModal}>Позвони сейчас</Button>
            </div>
        </section>
        <section className="container">
            <h2>Лицензии и сертификаты</h2>
            <Image.PreviewGroup>
                <Image
                    width={200}
                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                />
                <Image
                    width={200}
                    src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                />
                <Image
                    width={200}
                    src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
                />
            </Image.PreviewGroup>
        </section>
        <section className="container block-loc">
            <h2>Наше местоположение</h2>
            <div className="content">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A30bd86bcbf2286504fa64778bc79ab92189a213ea16bec02af89840779d860ca&amp;source=constructor" width="548" height="401" frameBorder="0"></iframe>
                <div className="rigth">
                    <p>Екб</p>
                    <p>
                        Ktyfybf 12
                    </p>
                </div>
            </div>

        </section>
        <p>
            Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
        </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p><p>
        Обеспечьте пожарную безопасность с помощью профессиональных монтажей. Не ждите, защитите свое помещение прямо сейчас!
    </p>
        <Footer/>
        <ModalWindow isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
    </>
  )
}

export default App
